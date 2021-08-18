import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

import ExtendedRowBody from '../extendedRowBody';

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle(false);

    const [bgRowOnMouseOver, setBgRowOnMouseOver] = useState(false);

    // row toggle background logic
    let bgToggle = (props.index % 2) ? '#fff' : '#ededed';

    return (
        <>
            <tr
                toggle background color between on mouse over and on mouse leave
                onMouseOver={() => setBgRowOnMouseOver({
                    bg: '#2d485fc2',
                    color: '#fff'
                })}
                onMouseLeave={() => setBgRowOnMouseOver({
                    bg: bgToggle,
                    color: 'black'
                })}

                style={{
                    background: bgRowOnMouseOver ? bgRowOnMouseOver.bg : bgToggle,
                    color: 'black',
                    cursor: 'pointer',
                }
                }

                // toggle the body on click when click at the row
                onClick={setExtend}
            >
                {props.children}
            </tr>

            {
                isExtended ?
                    <tr>
                        <td colSpan='100%'>
                            {
                                <ExtendedRowBody
                                    extendedContentConfig={props.extendedContentConfig}
                                    isExtended={isExtended}
                                />
                            }
                        </td>
                    </tr>
                    :
                    null
            }
        </>
    );
};
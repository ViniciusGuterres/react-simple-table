import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

import ExtendedRowBody from '../extendedRowBody/index';

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle();

    const [bgRowOnMouseOver, setBgRowOnMouseOver] = useState(false);

    // row toggle background logic
    const bgToggle = (props.index % 2) ? 'white' : '#ccc';

    return (
        <>
            <tr
                // toggle background color between on mouse over and on mouse leave
                onMouseOver={() => setBgRowOnMouseOver('#2d485fc2')}
                onMouseLeave={() => setBgRowOnMouseOver(bgToggle)}

                style={{ 
                    cursor: 'pointer', 
                    background: bgRowOnMouseOver ? bgRowOnMouseOver : bgToggle, 
                    border: '1px solid black' }
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
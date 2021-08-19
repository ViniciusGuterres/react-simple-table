import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

import ExtendedRowBody from '../extendedRowBody';
import TableData from "../tableData";

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle(false);

    const [bgRowOnMouseOver, setBgRowOnMouseOver] = useState(false);

    // row toggle background logic
    let bgToggle = (props.index % 2) ? '#fff' : '#ededed';

    let allRowData = props && props.rowData ? props.rowData : '';

    function renderDatas() {

        return (

            props.columnKey.map(item => {
                
                return (

                    <TableData
                        data={allRowData[item.dataKeyRow]}
                    />

                )
            })
        )

    };

    return (
        <>
            <tr style={{background: bgToggle}}>
                {renderDatas()}
            </tr>

            {/* //////////////////////         ALREADY DONE   ////////////////////////// */}
            {/* <tr
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

                onClick={setExtend}
            >
                {props.children}
            </tr> */}

            {/* {
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
            } */}
        </>
    );
};

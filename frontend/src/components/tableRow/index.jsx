import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

import ExtendedRowBody from '../extendedRowBody';
import TableData from "../tableData";

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle(false);

    const [bgRowOnMouseOver, setBgRowOnMouseOver] = useState(false);

    // row toggle background logic
    let bgToggle = (props.index % 2) ? '#fff' : '#ededed';

    // verify props
    const allRowData = props && props.rowData ? props.rowData : '';
    const columnKey = props && props.columnKey ? props.columnKey : '';

    function verifyDataRowType(rowType) {

        if (rowType.dataRowType && rowType.dataRowType === 'button' ) {
            return (
                <button>
                    {rowType.value}
                </button>
            )
        } else {
            return allRowData[rowType.dataKeyRow]
        }
    };

    function renderDatas() {

        return (

            columnKey.map(item => {
                let result = verifyDataRowType(item);

                return (

                    <TableData
                        // data={allRowData[item.dataKeyRow]}
                        data={result}
                    />

                )
            })
        )

    };

    return (
        <>
            <tr 
                style={{background: bgToggle}}
                onClick={setExtend}
            >
                {renderDatas()}
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

            >
                {props.children}
            </tr> */}

        </>
    );
};

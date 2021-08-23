import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

// fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

// generic components
import ExtendedRowBody from '../extendedRowBody';
import TableData from "../tableData";

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle(false);

    const [bgRowOnMouseOver, setBgRowOnMouseOver] = useState(false);

    // verify props
    const allRowData = props && props.rowData ? props.rowData : '';
    const columnKey = props && props.columnKey ? props.columnKey : '';
    const idRow = props && props.idRow ? props.idRow : 0;
    
    // row toggle background logic
    let bgToggle = (props.idRow % 2) ? '#fff' : '#ededed';

    // toggle between online, offline and anonymous
    let iconName = idRow % 2 === 0 ? faUser : faUserAltSlash;
    let iconBg = iconName === faUser ? '#3ade3a' : '#ff4a4a'

    if (idRow % 5 === 0) {
        iconName = faUserSecret;
        iconBg = '#272222d9'
    };

    
    // verify the data coloumn type and return the relative html type
    function verifyDataRowType(rowType) {

        const currentDataRowType = rowType && rowType.dataRowType ? rowType.dataRowType : '';

        switch (currentDataRowType) {
            case 'button':
                return (
                    <button>
                        {rowType.value}
                    </button>
                );

            case 'icon':
                return (
                    <FontAwesomeIcon
                        icon={iconName}
                        style={{
                            fontSize: '25px',
                            color: iconBg
                        }}
                    />
                );
            
            // return data of the current column key
            default:
                return (
                    <span>
                        {allRowData[rowType.dataKeyRow]}
                    </span>
                )
                
        };
    };

    function renderDatas() {

        return (

            columnKey.map((item, index) => {
                let currentData = verifyDataRowType(item);

                return (

                    <TableData
                        key={`dataKey ${index}`}
                        data={currentData}
                    />
                );
            })
        );
    };

    return (
        <>
            <tr
                // toggle background color between on mouse over and on mouse leave
                onMouseOver={() => setBgRowOnMouseOver({
                    bg: '#2d485fc2',
                    color: '#fff'
                })}
                onMouseLeave={() => setBgRowOnMouseOver({
                    bg: bgToggle,
                    color: 'black'
                })}
                onClick={setExtend}
                style={{ 
                    background: bgRowOnMouseOver ? bgRowOnMouseOver.bg : bgToggle,
                    color: bgRowOnMouseOver ? bgRowOnMouseOver.color : 'black',
                    cursor: 'pointer' 
                }}
            >
                {renderDatas()}
            </tr>
            
            {/* Extend Body Component */}
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
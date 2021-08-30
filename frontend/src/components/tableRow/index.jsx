import React from "react";
import useToggle from "../../hooks/useToggle";

// fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

// generic components
import ExtendedRowBody from '../extendedRowBody';
import TableData from "../tableData";

// styled components
import { Row } from './styles';

export default function TableRow(props) {

    const [isExtended, setExtend] = useToggle(false);

    // verify props
    const allRowData = props && props.rowData ? props.rowData : '';
    const columnKey = props && props.columnKey ? props.columnKey : '';
    const idRow = props && props.idRow ? props.idRow : 0;
    const isExtendable = props.isExtendable || false;


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
                    <button
                        onClick={
                            event => {
                                event.stopPropagation();

                                props.showModal({
                                    userCar: allRowData.userCar,
                                    userId: allRowData.userId,
                                    userModel: allRowData.userCarModel,
                                    userBrand: allRowData.userCarManufacturer,
                                    userType: allRowData.userCarType,
                                    userFuel: allRowData.userCarFuel,
                                })
                            }
                        }
                    >
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
            <Row
                // when click in the row, set Extende if is extendable
                onClick={isExtendable ? setExtend : null}
                bgToggle={props.idRow || 0}
            >
                {renderDatas()}
            </Row>

            {/* Extend Body Component */}
            {
                isExtended ?
                    <tr
                        style={{background: '#737e863d'}}
                    >
                        <td colSpan='100%'>
                            {
                                <ExtendedRowBody
                                    extendedContentConfig={props.extendedContentConfig}
                                    isExtended={isExtended}
                                    // test
                                    extendRowConfig={props.extendRowConfig}
                                    extendRowContent={props.extendRowContent(allRowData)}
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


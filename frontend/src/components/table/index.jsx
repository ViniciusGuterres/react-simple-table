import React, { Component } from 'react';

import TableRow from '../tableRow';

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: null
        };
    };

    renderHeaders() {
        // verify if the props exits
        const dataConfig =
            this.props && this.props.dataColumnsConfig ?
                this.props.dataColumnsConfig : '';

        return (

            dataConfig.map((headers, index) => {

                return (
                    <th key={`headerKey ${index}`}>
                        <h1>{headers.header}</h1>
                    </th>
                );
            })
        );
    };

    renderRows() {
        // verify if the props exits
        const allTableData =
            this.props && this.props.tableData ?
                this.props.tableData : '';

        const allColumnKey =
            this.props && this.props.dataColumnsConfig ?
                this.props.dataColumnsConfig : '';

        return (
            allTableData.map((rowData, idRow) => {
                // pass the data with the current key to the TableRow component

                for (let index in rowData) {

                    return (

                        <TableRow
                            key={`rowKey ${idRow}`}
                            rowData={rowData[index].allDataBaseValues}
                            columnKey={allColumnKey}
                            idRow={idRow}
                            extendedContentConfig={rowData[index].extendedContentConfig}
                        />
                    );

                };
                return false;
            })
        );
    };

    render() {

        return (

            <table
                style={styles.mainTable}
            >
                <thead>
                    <tr style={styles.tableHeader}
                    >
                        {this.renderHeaders()}
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}

                    {this.state.showModalCar ? this.renderModal() : null}
                </tbody>
            </table>
        );
    };
};

const styles = {
    tableHeader: {
        background: '#2d485fc2',
        color: '#fff',
        fontSize: '10px'
    },
    mainTable: {
        width: '100%',
        textAlign: 'center'
    }
};
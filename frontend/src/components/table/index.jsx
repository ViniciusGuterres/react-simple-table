import React, { Component } from 'react';

import TableRow from '../tableRow';

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.state= {
            showModal: null
        };
    };

    renderHeaders() {
        const dataConfig =
            this.props && this.props.dataColumnsConfig ?
                this.props.dataColumnsConfig : '';

        return (

            dataConfig.map(headers => {

                return (
                    <th>
                        <h1>{headers.header}</h1>
                    </th>
                );
            })
        );
    };

    renderRows() {
        const allTableData =
            this.props && this.props.tableData ?
                this.props.tableData : '';

        const allColumnKey =
            this.props && this.props.dataColumnsConfig ?
                this.props.dataColumnsConfig : '';

        return (

            allTableData.map((rowData, index) => {

                for (let index in rowData) {

                    if (rowData[index].dataBaseName === this.props.dataBaseName) {

                        return (

                            <TableRow
                                rowData={rowData[index].allDataBaseValues}
                                columnKey={allColumnKey}
                                index={index}
                                extendedContentConfig={rowData[index].extendedContentConfig}
                            />
                        )
                    };
                };
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
}
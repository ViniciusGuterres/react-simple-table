import React, { Component } from 'react';

import TableData from '../tableData';
import TableRow from '../tableRow';

export default class Table extends Component {
    constructor(props) {
        super(props);

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
                this.props.dataColumnsConfig : ''
        return (

            allTableData.map((rowData, index) => {

                return (
                    <TableRow
                        rowData={rowData}
                        columnKey={allColumnKey}
                        index={index}
                    />
                );
            })
        );
    };

    render() {
        return (
            <table
                style={{ width: '100%' }}
            >
                <thead>
                    <tr style={styles.tableHeader}
                    >
                        {this.renderHeaders()}
                    </tr>
                </thead>

                <tbody>

                    {/* <TableRow
                        tableData={
                            this.props.tableData
                        }
                        dataColumnsConfig={
                            this.props.dataColumnsConfig
                        }
                    /> */}

                    {this.renderRows()}

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
    }
}
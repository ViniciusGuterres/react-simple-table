import React, { Component } from 'react';

import TableRow from '../tableRow';
import PageController from '../pageController';

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.maxRowsPerPage = 20;
        this.allTableData = this.props.tableData || [];

        this.state = {
            message: false,
            currentPage: 1,
            initialPage: 1,
            totalPagess: this.allTableData.length / this.maxRowsPerPage
        };

    };

    renderHeaders() {
        // verify if the props exits
        const dataConfig = this.props.dataColumnsConfig || '';

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
        const allColumnKey = this.props.dataColumnsConfig || [];
        console.log(this.state.currentPage);
        this.goForward();
        console.log(this.state.currentPage);

        // just tests

        return (
            this.allTableData.map((rowData, idRow) => {
                // pass the data with the current key to the TableRow component

                    for (let index in rowData) {
                        return (
    
                            <TableRow
                                key={`rowKey${idRow}`}
                                rowData={rowData[index].allDataBaseValues || rowData[index]}
                                columnKey={allColumnKey}
                                idRow={idRow}
                                extendedContentConfig={rowData[index].extendedContentConfig}
                                modalConfig={this.props.modalConfig}
                                showModal={this.props.showModal}
                                // test
                                isExtendable={this.props.isExtendable}
                                tableData={this.props.tableData}
                                extendRowContent={this.props.extendRowContent}
                            />
                        );
                    };
            })
        );

        // for (let index = 0; index <= this.state.maxRowsPerPage; index++) {

        //     const rowData = allTableData[index];
        //     const idRow = index;

        //     for (let index in rowData) {

        //         <TableRow
        //             key={`rowKey${idRow}`}
        //             rowData={rowData[index].allDataBaseValues || rowData[index]}
        //             columnKey={allColumnKey}
        //             idRow={idRow}
        //             extendedContentConfig={rowData[index].extendedContentConfig}
        //             modalConfig={this.props.modalConfig}
        //             showModal={this.props.showModal}
        //             // test
        //             isExtendable={this.props.isExtendable}
        //             tableData={this.props.tableData}
        //             extendRowContent={this.props.extendRowContent}
        //         />
        //     };
        // }
    };

    // Page Controllers

    // set the current page + 1 and do not pass the total page
    goForward() {
        const page = {...this.state.currentPage};

        if (page < this.state.totalPages) {
            page++;
            this.setState({ currentPage: page });
        };

    };

    goBackward() {
        let page = this.state.currentPage;

        if (page > 0) {
            page--;
            this.setState({ currentPage: page })
        }

    };

    goInitial() {
        let page = this.state.initialPage;

        this.setState({ currentPage: page })
    };

    goToEnd() {
        let page = this.state.totalPages;

        this.setState({ currentPage: page })
    };

    render() {
        return (
            <>
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
                    </tbody>
                </table>
                <PageController />
            </>
        );
    };
};

const styles = {
    tableHeader: {
        background: '#2d485fc2',
        color: '#fff',
        fontSize: '10px',
    },
    mainTable: {
        width: '100%',
        textAlign: 'center',
    }
};
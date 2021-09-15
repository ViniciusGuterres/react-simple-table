import React, { Component } from 'react';

import TableRow from '../tableRow';
import PageController from '../pageController';

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.maxRowsPerPage = 20;
        this.allTableData = this.props.tableData || [];

        //  all class functions bind
        this.goForward = this.goForward.bind(this);
        this.goBackward = this.goBackward.bind(this);
        this.goInitial = this.goInitial.bind(this);
        this.goToEnd = this.goToEnd.bind(this);
        this.selectPage = this.selectPage.bind(this);

        this.state = {
            message: false,
            currentPage: 1,
            initialPage: 1,
            totalPages: this.allTableData.length / this.maxRowsPerPage
        };
    };

    renderHeaders() {
        // verify if the props exits
        const dataConfig = this.props.dataColumnsConfig || '';

        return (
            dataConfig.map((headers, index) => {
                return (
                    <th key={`headerKey ${index}`} style={styles.tableHeaderContent}>
                        <h1>{headers.header}</h1>
                    </th>
                );
            })
        );
    };

    renderRows() {
        // verify if the props exits
        const allColumnKey = this.props.dataColumnsConfig || [];

        // just tests
        const finalElement = this.maxRowsPerPage * this.state.currentPage;
        const initialElement = this.state.currentPage === 1 ? 0 : finalElement - this.maxRowsPerPage;

        const allColumsDataSlicedPerPage = this.allTableData.slice(initialElement, finalElement);

        return (
            allColumsDataSlicedPerPage.map((rowData, idRow) => {
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
                return false;
            })
        );
    };

    // Page Controllers

    // set the current page + 1 and do not pass the total page
    goForward() {
        let page = this.state.currentPage;
        if (page < this.state.totalPages) {
            page++;
            this.setState({ currentPage: page });
        };

    };

    goBackward() {
        let page = this.state.currentPage;

        if (page > 1) {
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

    // get the selected page from select box and set the current page state
    selectPage(event) {
        const selectedOption = event.target.options;
        const selectedOptionValue = selectedOption[selectedOption.selectedIndex].value;

        this.setState({ currentPage: selectedOptionValue });
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

                {/* Just show the page controller if total the pages is bigger than 1 */}
                {
                    this.state.totalPages > 1 ?
                        <div style={styles.pagesControler}>
                            <PageController
                                goForward={this.goForward}
                                goBackward={this.goBackward}
                                goInitial={this.goInitial}
                                goToEnd={this.goToEnd}
                            />

                            <span style={styles.pagesAmount}>
                                Página atual: <strong>{this.state.currentPage}</strong> de <strong>{this.state.totalPages}</strong>
                            </span>


                            <select
                                style={styles.selectPage}
                                onChange={this.selectPage}
                            >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                    :
                    null
                }
            </>
        );
    };
};

const styles = {
    tableHeader: {
        background: '#2d485fc2',
        color: '#fff',
        fontSize: '10px',
        width: '500px'
    },
    tableHeaderContent: {
        width: '500px'
    },
    mainTable: {
        width: '100%',
        textAlign: 'center',
    },
    pagesControler: {
        display: 'flex',
        alignContent: 'strech',
        alignItems: 'center'
    },
    pagesAmount: {
        marginLeft: '30px',
        fontSize: '18px'
    },
    selectPage: {
        padding: '5px',
        marginLeft: '10px'
    }
};
import React, { Component } from 'react';

import TableRow from '../tableRow';
import Modal from '../modal';

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: null
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                            modalConfig={this.props.modalConfig}
                            showModal={this.showModal}
                        />
                    );

                };
                return false;
            })
        );
    };

    // modal functions
    renderModal() {
        return (
            <Modal
                carObject={
                    this.state.showModal
                }
                close={this.closeModal}
                saveCar={this.saveCarForm}
            />
        );
    };

    showModal(obj) {
        this.setState({ showModal: obj })
    };

    closeModal() {
        this.setState({ showModal: null })
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

                    {this.state.showModal ? this.renderModal() : null}

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
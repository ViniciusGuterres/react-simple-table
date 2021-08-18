import React, { Component } from 'react';

import TableData from '../tableData';
import TableRow from '../tableRow';

export default class Table extends Component {
    constructor(props) {
        super(props);

    };

    renderHeaders() {
      
        return(
            this.props.dataColumnsConfig.map(headers => {
                
                return (
                    <th>
                        <h1>{headers.header}</h1>
                    </th>
                );
            })
        );
    };

    render() {
        return (
            <table 
                style={{width: '100%'}}
            >
                <thead>
                    <tr style={{ background: '#2d485fc2', color: '#fff', fontSize: '10px' }}>
                        {this.renderHeaders()}
                    </tr>
                </thead>

                <tbody>

                     <TableRow
                        rowData={
                            this.props.tableData
                        }
                     >

                        <TableData
                            tableData={
                                this.props.tableData
                            }

                            dataKey={
                                this.props.dataColumnsConfig
                            }
                        />

                    </TableRow> 
                </tbody>
                
            </table>
        );
    };
};
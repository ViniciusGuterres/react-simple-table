import React from 'react';

import ExtendedRowData from '../extendedRowData';
import ExtendedRowMenu from '../extendedRowMenu'

export default function ExtendedRowBody(props) {

    return (
        <div style={props.isExtended ? styles.rowExtended : { height: '0', opacity: '0' }}>

            {
                <ExtendedRowMenu
                    titles={["Acesso", "dataos", "Emprego"]}
                />
            }

            {
                <ExtendedRowData>

                </ExtendedRowData>
            }

        </div>
    )
};

const styles = {
    rowExtended: {
        backgroundColor: '#a2a2a229',
        display: 'flex',
        height: '400px',
        opacity: '1',
        boxShadow: '10px 9px 5px 1px rgba(0,0,0,0.13)',
        transition: 'width 0.35s 0.35s, height 0.25s 0.25s, opacity 0.50s',
    },

    headerData: {
        backgroundColor: '#696363c4',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '90%'
    }
}
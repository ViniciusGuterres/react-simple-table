import React from 'react';

export default function ExtendedRowBody(props) {

    return (
        <div style={props.isExtended ? styles.rowExtended : {height: '0', opacity: '0' }}>

            <div style={styles.bodyHeader}>
                <h1 style={styles.headerData}>Acessos</h1>
                <h1 style={styles.headerData}>Endereços</h1>
                <h1 style={styles.headerData}>Emprego</h1>
                <h1 style={styles.headerData}>Produtos comprados</h1>
                <h1 style={styles.headerData}>Carro</h1>
            </div>

            <div>
                <span>Content</span>
                <span>Content</span>
                <span>Content</span>
                <span>Content</span>
                <span>Content</span>
                <span>Content</span>
            </div>

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
        left: '0',

    },
    bodyHeader: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '10px',
        width: '20%',
        backgroundColor: 'red',
        textAlign: 'center'
    },
    headerData: {
        backgroundColor: '#696363c4',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer'
    }
}
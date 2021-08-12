import React from 'react';

export default function ExtendedRowBody(props) {

    return (
        <div style={props.isExtended ? styles.rowExtended : {height: '0', opacity: '0' }}>
            <div style={styles.rowExtended}>
                <div style={styles.bodyHeader}>
                    <h1>Acessos</h1>
                    <h1>Endereços</h1>
                    <h1>Emprego</h1>
                    <h1>Produtos comprados</h1>
                    <h1>Carro</h1>
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
        </div>
    )
};

const styles = {
    rowExtended: {
        backgroundColor: '#a2a2a229',
        height: '400px',
        opacity: '1',
        boxShadow: '10px 9px 5px 1px rgba(0,0,0,0.13)',
        transition: 'width 0.35s 0.35s, height 0.25s 0.25s, opacity 0.50s',
        left: '0',
    },
    bodyHeader: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '10px',
        width: '100%'
    }
}
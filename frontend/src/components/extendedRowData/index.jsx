import React from 'react';

export default function ExtendedRowData(props) {
    
    return(
        <div style={styles.container}>
    
            <h1 style={styles.usersTitle}>Carro title</h1>

            <div style={styles.usersInfo}>
                <span style={styles.usersInfoSpan}>Carro:</span>
                <span style={styles.usersInfoSpan}>Fabricante: </span>
                <span style={styles.usersInfoSpan}>Model</span>
                <span style={styles.usersInfoSpan}>Tipo</span>
                <span style={styles.usersInfoSpan}>Gasolina</span>
            </div>
        </div>
    )
};

const styles = {
    container: {
    backgroundColor: '#eae8e8',
    width: '80%',
    margin: '30px',
    borderRadius: '10px',
    boxShadow: '16px 16px 19px -4px rgba(0,0,0,0.24)'
    },

    usersTitle: {
        borderBottom: '1px solid #00000026',
    },

    usersInfo: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '18px'
    },

    usersInfoSpan: {
        color: 'red',
        marginBottom: '10px',
    }
}
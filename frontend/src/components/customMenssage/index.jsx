import React from 'react';

export default function CustomMessage(props) {

    return(
        <div style={props.toggleMessage ? styles.fadeIn : styles.fadeOut} onClick={props.message}>
            <span style={styles.btnClose}>
                x
            </span>
            {props.name}
        </div>
    )
};

const styles = {
    fadeIn: {
        color: '#fff',
        position: 'fixed',
        backgroundColor: '#23d84a',
        padding: '20px',
        alignText: 'center',
        fontSize: '20px',
        right: '-10px',
        top: '0px',
        opacity: '1',
        width: '20%',
        transition: 'width 0.35s 0.35s, height 0.25s 0.25s, opacity 0.50s',
        cursor: 'pointer'
    },
    btnClose: {
        float: 'right',
        fontSize: '22px',
        cursor: 'pointer'
    },
    fadeOut: {
        color: '#fff',
        position: 'fixed',
        backgroundColor: '#23d84a',
        padding: '20px',
        alignText: 'center',
        fontSize: '20px',
        right: '0px',
        top: '0px',
        opacity: '0',
        width: '0px',
        transition: 'width 0.25s 0.25s, height 0.25s 0.25s, opacity 0.25s',
        cursor: 'pointer'
    }
}

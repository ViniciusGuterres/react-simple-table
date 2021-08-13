import React, { useState } from 'react';

export default function ExtendedRowMenu(props) {

    console.log('renderizando o Menu coponent');
    return (
        <div style={styles.bodyHeader}>
            {/* {
                props.titles.map((title, index) => {
                    return (
                        <h1 
                            key={index}
                            onClick={props.clickTest}
                        >
                            {title}
                        </h1>
                    )
                })
            } */}
        </div>
    )
};

const styles = {
    bodyHeader: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '10px',
        width: '20%',
        backgroundColor: '#ccc',
    },


}
import React, { useState } from 'react';

export default function ExtendedRowMenu(props) {

    const [isMouseOver, setMouseOver] = useState(false);

    console.log('renderizando o Menu coponent');
    return (
        <div style={styles.bodyHeader}>
            {
                props.titles.map(title => {
                    return (
                        <h1 
                            onMouseOver={() => setMouseOver(true)}
                            style={isMouseOver ? styles.bgTes : null}
                        >
                            {title}
                        </h1>
                    )
                })
            }
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

    bgTes: {
        backgroundColor: 'red'
    }
}
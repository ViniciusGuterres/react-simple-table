import React from 'react';

export default function NavMenu(props) {

    function renderMenu() {
        return (
            props.titles.map((title, index) => {
                return (
                    <h1 
                        key={index}
                        onClick={() => props.selectMenu(title)}
                    >
                        {title}
                    </h1>
                )
            })
        )
    };

    return (
        <div style={styles.bodyHeader}>

            {renderMenu()}

        </div>
    )
};

const styles = {
    bodyHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '10px',
        width: '20%',
        backgroundColor: '#ccc',
    },


}
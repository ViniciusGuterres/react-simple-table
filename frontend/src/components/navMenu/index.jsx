import React from 'react';

export default function NavMenu(props) {

    function renderMenu() {
        return (
            props.titles.map((menuTitle, index) => {
                const allMenuTitle = menuTitle && menuTitle.title ? menuTitle.title : '';

                return (
                    <h1
                        key={index}
                        onClick={event => props.selectMenu(event.target.innerText)}
                        style={styles.singleTitle}
                    >
                        {allMenuTitle}
                    </h1>
                );
            })
        );
    };

    return (
        <div style={styles.bodyHeader}>
            {renderMenu()}
        </div>
    );
};

const styles = {
    bodyHeader: {
        fontSize: '13px',
        width: '20%',
        backgroundColor: '#2d485fc2',
        color: '#fff'
    },
    singleTitle: {
        width: '100%',
        // backgroundColor: '#ccc',
        cursor: 'pointer',
        borderBottom: '1px solid #ffffff59',
        top: '-20px'
    }
};
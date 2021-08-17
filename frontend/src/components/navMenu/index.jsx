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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '10px',
        width: '20%',
        backgroundColor: '#ccc',
    },
};
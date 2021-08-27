import React from 'react';

export default function NavMenu(props) {

    function renderMenu() {
        return (
            // return all the titles passed by props
            props.titles.map((menuTitle, index) => {
                const allMenuTitle =  menuTitle.title || '';
                
                return (
                    <h1
                        // return the clicked menu to the extended row body component
                        onClick={
                            event => props.selectMenu(event.target.innerText)
                        }
                        style={{...styles.singleTitle}}
                        key={`menu-title${index}`}
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
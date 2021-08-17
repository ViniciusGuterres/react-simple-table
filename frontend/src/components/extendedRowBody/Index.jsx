import React, { useState } from 'react';

import NavMenu from '../navMenu';
import ContentCard from '../contentCard';

export default function ExtendedRowBody(props) {

    const [selectedMenu, setSelectedMenu] = useState(props.extendedContentConfig[0]);

    // just set the menu clicked returned by NavMenu component
    function selectMenuContent(menuTitle) {

        props.extendedContentConfig.map(item => {
            if (menuTitle === item.title) {
                setSelectedMenu(item);
            };
        });
    };

    return (
        <div style={props.isExtended ? styles.rowExtended : { height: '0', opacity: '0' }}>

            {
                <NavMenu
                    titles={props.extendedContentConfig}
                    selectMenu={selectMenuContent}
                />
            }

            {
                selectedMenu ?
                    <ContentCard
                        content={selectedMenu}
                    />
                    :
                    null
            }

        </div>
    )
};

const styles = {
    rowExtended: {
        backgroundColor: '#f9f9f9',
        display: 'flex',
        height: '400px',
        opacity: '1',
        boxShadow: '10px 9px 5px 1px rgba(0,0,0,0.13)',
        transition: 'width 0.35s 0.35s, height 0.25s 0.25s, opacity 0.50s',
    },
    headerData: {
        backgroundColor: '#696363c4',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '90%'
    }
};
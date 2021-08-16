import React, { useState } from 'react';

import NavMenu from '../navMenu';
import ContentCard from '../contentCard';

export default function ExtendedRowBody(props) {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const [selectedContent, setSelectedContent] = useState(null);

    // just set the menu clicked
    function selectMenuContent(menuTitle) {
        setSelectedMenu(menuTitle);
        
        props.extendedContentConfig.map(content => {
            if (content.title == selectedMenu) {
                selectedContent(content)
            }
        })
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
                        content={selectedContent}
                    />
                    :
                    null
            }

        </div>
    )
};

const styles = {
    rowExtended: {
        backgroundColor: '#a2a2a229',
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
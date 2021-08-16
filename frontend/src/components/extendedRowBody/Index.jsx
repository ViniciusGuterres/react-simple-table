import React, { useState } from 'react';

import NavMenu from '../navMenu';
import ContentCard from '../contentCard/Index';

export default function ExtendedRowBody(props) {

    const [menuContent, setMenuContent] = useState(null);

    function selectMenuContent(menuTitle) {
        switch(menuTitle) {
            case "acessos":
                setMenuContent(props.data[0]);
                break;

            case "usuário":
                setMenuContent(props.data[1]);
                break;

            case "emprego":
                setMenuContent(props.data[2]);
                break;

            case "carro":
                setMenuContent(props.data[3]);
                break;
            
            default:
                setMenuContent(null);
                break;
        }
    }

    return (
        <div style={props.isExtended ? styles.rowExtended : { height: '0', opacity: '0' }}>

            {
                <NavMenu
                    titles={["acessos", "usuário", "emprego", "carro", "Marico"]}
                    selectMenu={selectMenuContent}
                />
            }

            {
                menuContent ?
                    <ContentCard
                        content={menuContent}
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
}
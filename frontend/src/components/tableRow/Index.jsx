import React, { useState } from 'react';
import ExtendedRowBody from '../extendedRowBody/Index';

export default function TableRow(props) {

    // toggle the row body 
    const [isExtended, setExtend] = useState(false);

    function toggleExtend() {
        setExtend(prevState => !prevState)
    }

    // row toggle background logic
    const bgToggle = (props.index % 2) ? 'white' : '#ccc';
    
    return (
        <>
            <tr
                style={{ cursor: 'pointer', background: bgToggle, border: '1px solid black' }}
                onClick={toggleExtend}
                
            >
                {props.children}
            </tr>

            {
                isExtended ?
                    <tr>
                        <td colSpan='100%'>
                            {
                                <ExtendedRowBody 
                                    isExtended={isExtended}
                                    data={props.data}
                                    titles={props.titles}
                                />
                            }
                        </td>
                    </tr>
                    :
                    null
            }
        </>
    );
};
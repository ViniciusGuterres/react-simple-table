import React, { useState } from 'react';
import ExtendedRowBody from '../extendedRowBody/Index';

export default function TableRow(props) {

    const [isExtended, setExtend] = useState(false);

    function toggleExtend() {
        setExtend(prevState => !prevState)
    }

    // row toggle background logic
    const bgToggle = (props.index % 2) ? 'white' : '#ccc';

    console.log('renderRow');
    return (
        <>
            <tr
                style={{ background: bgToggle, cursor: 'pointer' }}
                onClick={toggleExtend}
            >
                {props.children}
            </tr>
            {isExtended ? <ExtendedRowBody isExtended={isExtended}/> : ''}
        </>
    );
};
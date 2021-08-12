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
                style={{...styles.row, background: bgToggle}}
                onClick={toggleExtend}
            >
                {props.children}
            </tr>

            {
                isExtended ?
                    <tr>
                        <td colSpan='100%'>{<ExtendedRowBody isExtended={isExtended} />}</td>
                    </tr>
                    :
                    null
            }

        </>
    );
};

const styles = {
    row: {
        cursor: 'pointer',
    }
}
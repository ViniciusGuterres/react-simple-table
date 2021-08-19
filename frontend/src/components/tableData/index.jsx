import React from 'react';

export default function TableData(props) {

    function renderKey() {
        
        return (
                <td>{props.data}</td>
        )
    };

    return (
        <>
            
            {renderKey()}

        </>
    );
};
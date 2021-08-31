import React from 'react';

export default function ExtendedRowBody(props) {

    return (
        <div>
            {props.isExtended ? props.extendRowContent : null}
        </div>
    )
};

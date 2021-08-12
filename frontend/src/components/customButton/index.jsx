import React from 'react';

export default function CustomButton(props) {

    return (
        <button
            style={props.style}
            onClick={props.editMode}
            disabled={props.disabled}
            onFocus={ props.focus }
        >
            {props.name}
        </button>
    )

};
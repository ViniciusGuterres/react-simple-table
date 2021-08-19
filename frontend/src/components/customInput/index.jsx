import React from 'react';

export default function CustomInput(props) {

    return (
        <div style={{ display: 'flex', paddingTop: '5px' }}>
            
            <label style={{width: '30%'}}>{ props && props.labelName ? props.labelName : '' }</label>

            <input
                type={props && props.typeInput ? props.typeInput : 'text'}
                onChange={props && props.onChange ? props.onChange : 'null'}
                value= { props && props.value ? props.value : '' }
                style={{
                    width: '70%',
                    borderRadius: '10px',
                    outline: 'none',
                    border: '1px solid #b1afafcf',
                    padding: '5px',
                    marginLeft: '5px',
                }}
                disabled={ props && props.readOnly ? true : false }
            />

        </div>
            
    )


};

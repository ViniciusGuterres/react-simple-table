import React from 'react';

export default function ContentCard(props) {

    function renderFields() {
        return (
            props.content.fieldsNames.map((itens, index) => {
                return (
                    <>
                        <label style={styles.label}>{itens.label}: </label>
                        <span style={styles.value}>
                            {itens.values}
                        </span><br></br>
                    </>
                );
            })
        );
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.h1Title}>
                {
                    props.content && props.content.title 
                    ?
                    props.content.title
                    :
                    ''
                }
            </h1>
            {renderFields()}
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffffff',
        width: '80%',
        margin: '30px',
        borderRadius: '10px',
        boxShadow: '16px 16px 19px -4px rgba(0,0,0,0.24)',
        display: 'inline-block'
    },
    h1Title: {
        width: '100%',
        borderBottom: '1px solid #00000036',
    },
    label: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    value: {
        fontSize: '20px',
    }
};
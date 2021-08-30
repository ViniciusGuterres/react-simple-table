import React from 'react';

export default function ContentCard(props) {

    const selectedMenuObj = props.content[0] || [];
    const selectedMenuFieldsNames = selectedMenuObj.fieldsNames || [];

    function renderFields() {
        return (
            selectedMenuFieldsNames.map((itens, index) => {
                return (

                    <div key={index}>

                        <label style={{ fontWeight: 'bold' }}>{itens.label}: </label>
                        <span style={styles.value}>
                            {itens.values}
                        </span><br></br>

                    </div>
                );
            })
        );
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.h1Title}>
                {selectedMenuObj && selectedMenuObj.title || ''}
            </h1>

            <div style={styles.contentContainer}>
                {renderFields()}
                {props.children}
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffffff',
        width: '50%',
        borderRadius: '10px',
        boxShadow: '16px 16px 19px -4px rgba(0,0,0,0.24)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px'

    },
    h1Title: {
        width: '100%',
        borderBottom: '1px solid #00000036',
    },
    contentContainer: {
        fontSize: '20px',
    }
};

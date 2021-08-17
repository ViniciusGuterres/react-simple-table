import React from 'react';

export default function ContentCard(props) {

    function renderFields() {
        return (
            props.content.fieldsNames.map((itens, index) => {
                console.log(itens);
                return (
                    <>
                        <label>
                            {itens.label}: 
                        </label>
                        <span>
                            {itens.values}
                        </span><br></br>
                    </>
                )
            })
        )
    }

    return (
        <div style={styles.container}>
            <h1>
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
    )
};

const styles = {
    container: {
        backgroundColor: '#eae8e8',
        width: '80%',
        margin: '30px',
        borderRadius: '10px',
        boxShadow: '16px 16px 19px -4px rgba(0,0,0,0.24)'
    },
    usersTitle: {
        borderBottom: '1px solid #00000026',
    },
    usersInfo: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '18px'
    },
    usersInfoSpan: {
        color: 'red',
        marginBottom: '10px',
    }
}
import React from 'react';

export default function ContentCard(props) {

    console.log(props.content);
    function renderCard() {
        for (let test in props.content) {
            console.log(test);
        };
    }

    console.log(props.content);
    return (
        <>
            {renderCard()}
        </>
    )
};
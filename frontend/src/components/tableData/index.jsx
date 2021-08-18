import React from 'react';

export default function TableData(props) {


    function renderKey() {
        
        // return (
        //     props.val.map(item => {
        //         return(
        //             <td>{item.userCar}</td>
        //         )
        //     })
        // )
        return (
            <td>{props.val.userCar}</td>
        )
    };

    console.log(props.val);
    return (
        <>
            
            {renderKey()}

        </>
    );
};
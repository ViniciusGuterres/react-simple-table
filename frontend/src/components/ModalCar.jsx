import React from 'react';

export default function ModalCar(props) {
    const userCars = {
        car_id: 1,
        car_fuel: "Diesel",
        car_manufacturer: "Nissan",
        car_model: "PT Cruiser",
        car_name: "Fiat Aventador",
        car_type: "Convertible"
    }

    return(
        <div style={ styles.overlay }>

            <div style={ styles.card }>

                <h1 style={ styles.title } >Carro: { userCars.car_name }</h1>
                <p>Modelo: { userCars.car_model }</p>
                <p>Marca: { userCars.car_manufacturer }</p>
                <p>Gasolina: { userCars.car_fuel }</p>
                <p>Tipo: { userCars.car_type }</p>

                <button style={ styles.exit }>X</button>

            </div>

        </div>

    )
};

const styles = {
    overlay: {
        backgroundColor: '#31303099',
        width: '100%',
        height: '100%',
        zIndex: '11',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        zIndex: '10',
        textAlign: 'center',
        height: '180px',
        position: 'relative',
        maxHeight: '200px',
        borderRadius: '10px'
    },

    title: {
        backgroundColor: '#757575c9',
        color: '#fff',
        padding: '20px'
    },

    exit: {
        cursor: 'pointer',
        position: 'absolute',
        top: '0px',
        right: '0px',
        outline: '0',
        padding: '10px',
        backgroundColor: '#929292',
        border: 'none',
        color: '#fff'   
    },
    


};
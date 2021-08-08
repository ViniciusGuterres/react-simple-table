import React from 'react';

export default function ModalCar(props) {
    return(
        <div style={ styles.card }>

            <h1>Carro: </h1>
            <p>Modelo: </p>
            <p>Marca: </p>
            <p>Gasolina: </p>
            <p>Tipo: </p>

        </div>
    )
};

const styles = {
    card: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 9,
        backgroundColor: '#ffffff'
    },


}
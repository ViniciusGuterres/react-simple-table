import React, { useState } from 'react';

import CustomInput from '../customInput';
import CustomButton from '../customButton';

/**
 * 
 * @param {*} props 
 * @returns 
 */

export default function Modal(props) {

    const initialCarObj = {
        user_id: props.carObject.userId ? props.carObject.userId : '',
        carId: props.carObject.userCarId ? props.carObject.userCarId : '',
        car_name: props.carObject.userCar ? props.carObject.userCar : '',
        car_model: props.carObject.userModel ? props.carObject.userModel : '',
        car_manufacturer: props.carObject.userBrand ? props.carObject.userBrand : '',
        car_type: props.carObject.userType ? props.carObject.userType : '',
        car_fuel: props.carObject.userFuel ? props.carObject.userFuel : ''
    };

    const [carObj, setChanges] = useState({ ...initialCarObj });

    const [isReadable, setMode] = useState(true);

    function toggleMode() {
        setMode(!isReadable);
    };

    function verifyEditedInputs() {

        const carTitleEdited = initialCarObj.car_name !== carObj.car_name;
        const carModelEdited = initialCarObj.car_model !== carObj.car_model;
        const carBrandEdited = initialCarObj.car_manufacturer !== carObj.car_manufacturer;
        const carTypeEdited = initialCarObj.car_type !== carObj.car_type;
        const carFuelEdited = initialCarObj.car_fuel !== carObj.car_fuel;

        return !(carTitleEdited || carModelEdited || carBrandEdited || carTypeEdited || carFuelEdited);
    };

    function saveEditedInputs() {
        const carObjEdited = { user_id: initialCarObj.user_id };

        const carTitleEdited = initialCarObj.car_name !== carObj.car_name ? carObj.car_name : initialCarObj.car_name;
        const carModelEdited = initialCarObj.car_model !== carObj.car_model ? carObj.car_model : initialCarObj.car_model;
        const carBrandEdited = initialCarObj.car_manufacturer !== carObj.car_manufacturer ? carObj.car_manufacturer : initialCarObj.car_manufacturer;
        const carTypeEdited = initialCarObj.car_type !== carObj.car_type ? carObj.car_type : initialCarObj.car_type;
        const carFuelEdited = initialCarObj.car_fuel !== carObj.car_fuel ? carObj.car_fuel : initialCarObj.car_fuel;

        carObjEdited.car_name = carTitleEdited;

        carObjEdited.car_model = carModelEdited;

        carObjEdited.car_manufacturer = carBrandEdited;

        carObjEdited.car_type = carTypeEdited;

        carObjEdited.car_fuel = carFuelEdited;


        props.saveCar(carObjEdited);
        props.close();
    };


    return (
        <div style={styles.parentDiv} onClick={props.close}>

            <div style={styles.modalDiv} onClick={event => event.stopPropagation()}>

                <div style={styles.carHeader}>
                    <h1>
                        Carro
                    </h1>

                    <button style={styles.exit}
                        onClick={props.close} >
                        X
                    </button>
                </div>

                <div style={styles.carBody} >

                    <div style={styles.rows}>

                        <CustomInput
                            focus={true}
                            labelName='Carro'
                            value={carObj.car_name}
                            onChange={event => {
                                setChanges(
                                    carObj => ({ ...carObj, car_name: event.target.value })
                                );
                            }}
                            readOnly={isReadable}
                        />

                    </div>

                    <div style={styles.rows}>

                        <CustomInput
                            labelName='Modelo'
                            value={carObj.car_model}
                            style={styles.inputs}
                            onChange={event => {
                                setChanges(
                                    carObj => ({ ...carObj, car_model: event.target.value })
                                );
                            }}
                            readOnly={isReadable}
                        />

                    </div>


                    <div style={styles.rows}>

                        <CustomInput
                            labelName='Marca'
                            value={carObj.car_manufacturer}
                            style={styles.inputs}
                            onChange={event => {
                                setChanges(
                                    carObj => ({ ...carObj, car_manufacturer: event.target.value })
                                );
                            }}
                            readOnly={isReadable}
                        />

                    </div>

                    <div style={styles.rows}>

                        <CustomInput
                            labelName='Tipo'
                            value={carObj.car_type}
                            style={styles.inputs}
                            onChange={event => {
                                setChanges(
                                    carObj => ({ ...carObj, car_type: event.target.value })
                                );
                            }}
                            readOnly={isReadable}
                        />

                    </div>

                    <div style={styles.rows}>

                        <CustomInput
                            labelName='Gasolina'
                            value={carObj.car_fuel}
                            style={styles.inputs}
                            onChange={event => {
                                setChanges(
                                    carObj => ({ ...carObj, car_fuel: event.target.value })
                                );
                            }}
                            readOnly={isReadable}
                        />

                    </div>

                </div>

                {/* render edit or save button */}
                {
                    isReadable ?
                        <CustomButton
                            name='Editar'
                            style={styles.edit}
                            editMode={toggleMode}
                        />
                        :
                        <div>
                            <CustomButton
                                name='Cancelar'
                                style={styles.cancel}
                                editMode={toggleMode}
                            />
                            <CustomButton
                                name='Salvar'
                                style={verifyEditedInputs() ? styles.saveBlocked : styles.save}
                                editMode={saveEditedInputs}
                                disabled={verifyEditedInputs()}
                            />
                        </div>
                }
            </div>
        </div>
    );
};

const styles = {
    parentDiv: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#5d555575',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalDiv: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        position: 'relative'
    },
    carHeader: {
        borderBottom: '0.01em solid #9c9c9c4f',
        textAlign: 'center',

    },
    carBody: {
        borderRadius: '12px',
        padding: '30px',
    },
    rows: {
        margin: '10px',
    },

    exit: {
        cursor: 'pointer',
        position: 'absolute',
        top: '-10px',
        right: '0px',
        padding: '13px',
        color: '#ff6347',
        fontSize: '25px',
        border: 'none',
        background: 'none'
    },
    save: {
        backgroundColor: '#19c145d1',
        padding: '10px',
        width: '50%',
        fontSize: '18px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    },

    saveBlocked: {
        backgroundColor: '#61626359',
        padding: '10px',
        width: '50%',
        fontSize: '18px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    },

    edit: {
        backgroundColor: '#eaa301c4',
        padding: '10px',
        width: '100%',
        fontSize: '18px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    },
    cancel: {
        backgroundColor: '#ea0101c4',
        padding: '10px',
        width: '50%',
        fontSize: '18px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        position: 'left'
    }
};
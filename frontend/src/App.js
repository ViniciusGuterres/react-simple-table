import React, { Component } from 'react';

import { UAParser } from 'ua-parser-js';

// database 
import data from './users/users';
import jobData from './users/users_job';
import carsData from './users/users_cars';
import addressData from './users/users_address';
import accessData from './users/users_access';
import productsData from './users/users_products_buyed';

// components 
import ModalCar from './components/modal';
import CustomMessage from './components/customMenssage/CustomMenssage';
import Table from './components/table';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);

        // map all my user datas and add the others dataBase with the corresponding id
        this.userList = data.map(user => {

            const userData = user;
            const jobId = userData.user_job_id;
            const carId = userData.user_car_id;
            const accessId = userData.user_access_id;
            const productsId = userData.user_product_buyed_id;
            const addressId = userData.user_access_id;

            //add the others dataBase with the corresponding id
            if (jobData[jobId]) {
                userData.currentJob = jobData[jobId];
            };

            if (addressData[addressId]) {
                userData.currentAddress = addressData[addressId];
            };

            if (accessData[accessId]) {
                userData.currentAccess = accessData[accessId];
            };

            if (productsData[productsId]) {
                userData.currentProduct = productsData[productsId];
            };

            if (carsData[carId]) {
                userData.currentCar = carsData[carId];
            };

            return userData;
        });

        this.carList = Object.values(carsData).map(car => {
            const carData = car;
            let test = data;

            test.forEach(item => {
                
                console.log(item);
            })



            return carData;
        });

        this.showCar = this.showCar.bind(this);
        this.close = this.close.bind(this);
        this.saveCarForm = this.saveCarForm.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        this.state = {
            allUsersData: this.userList,
            allCarsData: this.carList,
            message: false
        };
    };

    getAllUsersData() {
        return (

            this.state.allUsersData.map((user, index) => {

                // testing

                // verify if exist each single data
                const userId = user.user_id ? user.user_id : '';
                const userFirstName = user.user_first_name ? user.user_first_name : '';
                const userBirth = user.user_birth_date ? user.user_birth_date : '';

                const userJobTitle = user.currentJob && user.currentJob.user_job_title ?
                    user.currentJob.user_job_title : '';
                const userJobAddress = user.currentJob && user.currentJob.user_job_address ?
                    user.currentJob.user_job_address : '';
                const userSalary = user.currentJob && user.currentJob.user_job_salary ?
                    user.currentJob.user_job_salary : '';
                const userSalarySymbol = user.currentJob && user.currentJob.user_job_salary_currency_symbol ?
                    user.currentJob.user_job_salary_currency_symbol : '';

                const userCarId = user.currentCar && user.currentCar.car_id ?
                    user.currentCar.car_id : '';
                const userCar = user.currentCar && user.currentCar.car_name ?
                    user.currentCar.car_name : '';
                const userModel = user.currentCar && user.currentCar.car_model ?
                    user.currentCar.car_model : '';
                const userType = user.currentCar && user.currentCar.car_type ?
                    user.currentCar.car_type : '';
                const userBrand = user.currentCar && user.currentCar.car_manufacturer ?
                    user.currentCar.car_manufacturer : '';
                const userFuel = user.currentCar && user.currentCar.car_fuel ?
                    user.currentCar.car_fuel : '';

                const userProductAppliance =
                    user.currentProduct && user.currentProduct.user_product_buyed_appliance ?
                        user.currentProduct.user_product_buyed_appliance : '';
                const userProductIndusty =
                    user.currentProduct && user.currentProduct.user_product_buyed_business_industy ?
                        user.currentProduct.user_product_buyed_business_industy : '';
                const userProductTechnology =
                    user.currentProduct && user.currentProduct.user_product_buyed_business_technology ?
                        user.currentProduct.user_product_buyed_business_technology : '';
                const userProductDepartmente =
                    user.currentProduct && user.currentProduct.user_product_buyed_commerce_department ?
                        user.currentProduct.user_product_buyed_commerce_department : '';
                const userProductCompanyName =
                    user.currentProduct && user.currentProduct.user_product_buyed_company_name ?
                        user.currentProduct.user_product_buyed_company_name : '';
                const userProductName =
                    user.currentProduct && user.currentProduct.user_product_buyed_product_name ?
                        user.currentProduct.user_product_buyed_product_name : '';
                const userProductDescription =
                    user.currentProduct && user.currentProduct.user_product_buyed_product_description ?
                        user.currentProduct.user_product_buyed_product_description : '';
                const userProductMaterial =
                    user.currentProduct && user.currentProduct.user_product_buyed_product_material ?
                        user.currentProduct.user_product_buyed_product_material : '';
                const userProductPrice =
                    user.currentProduct && user.currentProduct.user_product_buyed_product_price ?
                        user.currentProduct.user_product_buyed_product_price : '';

                const userAddressStreet =
                    user.currentAddress && user.currentAddress.user_address_street_address ?
                        user.currentAddress.user_address_street_address : '';
                const userAddressName =
                    user.currentAddress && user.currentAddress.user_address_street_name ?
                        user.currentAddress.user_address_street_name : '';
                const userAddressSufix =
                    user.currentAddress && user.currentAddress.user_address_street_sufix ?
                        user.currentAddress.user_address_street_sufix : '';
                const userAddressCity =
                    user.currentAddress && user.currentAddress.user_address_city ?
                        user.currentAddress.user_address_city : '';
                const userAddressCityPrefix =
                    user.currentAddress && user.currentAddress.user_address_city_prefix ?
                        user.currentAddress.user_address_city_prefix : '';
                const userAddressSecondary =
                    user.currentAddress && user.currentAddress.user_address_secondary_address ?
                        user.currentAddress.user_address_secondary_address : '';
                const userAddressDirection =
                    user.currentAddress && user.currentAddress.user_address_address_direction ?
                        user.currentAddress.user_address_address_direction : '';
                const userState =
                    user.currentAddress && user.currentAddress.user_address_state ?
                        user.currentAddress.user_address_state : '';
                const userCountry =
                    user.currentAddress && user.currentAddress.user_address_country ?
                        user.currentAddress.user_address_country : '';

                const userBusinessTechnoloy =
                    user.currentAccess && user.currentAccess.user_access_business_technoloy ?
                        user.currentAccess.user_access_business_technoloy : '';
                const userIpAddress =
                    user.currentAccess && user.currentAccess.user_access_ip_address ?
                        user.currentAccess.user_access_ip_address : '';
                const userMacAddress =
                    user.currentAccess && user.currentAccess.user_access_mac_address ?
                        user.currentAccess.user_access_mac_address : '';
                const userAccessAgent =
                    user.currentAccess && user.currentAccess.user_access_user_agent ?
                        user.currentAccess.user_access_user_agent : '';
                const userAccessLogin =
                    user.currentAccess && user.currentAccess.user_access_login ?
                        user.currentAccess.user_access_login : '';

                // handle with access agent, using the UAParser Object
                let uaParser = new UAParser();
                uaParser.setUA(userAccessAgent);

                // get the OS name and current version
                let uaParserResult = uaParser.getResult();
                let osName = uaParserResult.os.name;
                let osVersion = uaParserResult.os.version;

                // refactor later
                const usersCarObj = {
                    userId,
                    userCarId,
                    userCar,
                    userModel,
                    userType,
                    userBrand,
                    userFuel
                };

                const usersObj = {
                    userId,
                    userFirstName,
                    userBirth,
                    userSalary,
                    userCar
                };


                // config to show all users content in each row body
                const extendedContentConfigAllData = [
                    {
                        title: 'Emprego',
                        fieldsNames: [
                            {
                                label: 'Emprego',
                                values: userJobTitle
                            },
                            {
                                label: 'Endereço',
                                values: userJobAddress
                            },
                            {
                                label: 'Salário',
                                values: `${userSalarySymbol} ${userSalary.replace('.', ',')}`
                            }
                        ]
                    },
                    {
                        title: 'Usuário',
                        fieldsNames: [
                            {
                                label: 'Nome',
                                values: userFirstName
                            },
                            {
                                label: 'Nascimento',
                                values: userBirth
                            }
                        ]
                    },
                    {
                        title: 'Acessos',
                        fieldsNames: [
                            {
                                label: 'Tecnologia',
                                values: userBusinessTechnoloy
                            },
                            {
                                label: 'Endereço de Ip',
                                values: userIpAddress
                            },
                            {
                                label: 'Endereço mac',
                                values: userMacAddress
                            },
                            {
                                label: 'login',
                                values: userAccessLogin
                            },
                            {
                                label: 'OS',
                                values: `${osName} ${osVersion}`
                            },
                        ]
                    },
                    {
                        title: 'Produtos',
                        fieldsNames: [
                            {
                                label: 'nome',
                                values: userProductName
                            },
                            {
                                label: 'Empresa',
                                values: userProductCompanyName
                            },
                            {
                                label: 'Departamento',
                                values: userProductDepartmente
                            },
                            {
                                label: 'Indústria',
                                values: userProductIndusty
                            },
                            {
                                label: 'Preço',
                                values: `${userSalarySymbol} ${userProductPrice}`
                            },
                            {
                                label: 'tecnologia utilizada',
                                values: userProductTechnology
                            },
                            {
                                label: 'Material',
                                values: userProductMaterial
                            },
                            {
                                label: 'Utensílio',
                                values: userProductAppliance
                            },
                            {
                                label: 'Descrição',
                                values: userProductDescription
                            },
                        ]
                    },
                    {
                        title: 'Endereço',
                        fieldsNames: [
                            {
                                label: 'Rua',
                                values: userAddressStreet
                            },
                            {
                                label: 'Nome',
                                values: userAddressName
                            },
                            {
                                label: 'Cidade',
                                values: `${userAddressCityPrefix} ${userAddressCity}`
                            },
                            {
                                label: 'Endereço secundário',
                                values: userAddressSecondary
                            },
                            {
                                label: 'Direção',
                                values: userAddressDirection
                            },
                            {
                                label: 'Estado',
                                values: `${userState} - ${userCountry}`
                            }
                        ]
                    },
                    {
                        title: 'Carro',
                        fieldsNames: [
                            {
                                label: 'Carro',
                                values: userCar
                            },
                            {
                                label: 'Modelo',
                                values: userModel
                            },
                            {
                                label: 'Fabricante',
                                values: userBrand
                            },
                            {
                                label: 'Tipo',
                                values: userType
                            },
                            {
                                label: 'Gasolina',
                                values: userFuel
                            }
                        ]
                    }
                ];

                // body extend for car
                const extendedContentConfigCurrentCarOwns = [
                    {
                        title: 'Dono',
                        fieldsNames: [
                            {
                                label: 'Nome',
                                values: userFirstName
                            },
                            {
                                label: 'Nascimento',
                                values: userBirth
                            },
                            {
                                label: 'Salário',
                                values: `${userSalarySymbol} ${userSalary.replace('.', ',')}`
                            }
                        ]
                    },
                ];

                // tables content
                const tableData = [
                    {
                        dataBaseName: 'users',
                        allDataBaseValues: usersObj,
                        extendedContentConfig: extendedContentConfigAllData
                    },
                    {
                        dataBaseName: 'cars',
                        allDataBaseValues: usersCarObj,
                        extendedContentConfig: extendedContentConfigCurrentCarOwns
                    }
                ]

                return (
                    // testing car obj as parameters data
                    tableData

                    // <>
                    //     <TableRow
                    //         index={index}
                    //         key={`Row ${index}`}
                    //         extendedContentConfig={extendedContentConfig}
                    //     >
                    //         <td>{userFirstName}</td>
                    //         <td>{userBirth}</td>
                    //         <td>{}</td>
                    //         <td>{userJobTitle}</td>
                    //         <td>{`${userSalarySymbol}: ${userSalary.replace('.', ',')}`}</td>
                    //         <td>{userJobAddress}</td>
                    //         <td>
                    //             <button onClick={(event) => {
                    //                 event.stopPropagation();
                    //                 this.showCar(carObj);
                    //             }}>
                    //                 Visualizar
                    //             </button>
                    //         </td>

                    //         <td>
                    //             <FontAwesomeIcon
                    //                 style={{
                    //                     fontSize: '25px',
                    //                     color: iconBg
                    //                 }}
                    //                 icon={iconName}
                    //             />
                    //         </td>
                    //     </TableRow>
                    // </>
                );
            })
        );
    };

    getAllCarsData() {

        return (

            this.state.allCarsData.map(car => {
    
                // verify if exists
                const carObj = {
                    carName: car && car.car_name ? car.car_name : '',
                    carModel: car && car.car_model ? car.car_model : '',
                    carManufacturer: car && car.car_manufacturer ? car.car_manufacturer : '',
                    carFuel: car && car.car_fuel ? car.car_fuel : '',
                    carType: car && car.car_type ? car.car_type : ''
                };
    
                // tables content
                const tableData = [
                    {
                        dataBaseName: 'cars',
                        allDataBaseValues: carObj,
                    }
                ];
    
                return (
                    tableData
                )
    
            })
        );

    };

    renderModal() {
        return (
            <ModalCar
                carObject={
                    this.state.showModalCar
                }
                close={this.close}
                saveCar={this.saveCarForm}
            />
        );
    };

    showCar(carObj) {
        this.setState({ showModalCar: carObj });
    };

    close() {
        this.setState({ showModalCar: null })
    };

    closeMessage() {
        this.setState({ message: false })
    }

    saveCarForm(newCarValues) {

        let newList = this.state.allUsersData;

        const search = element => element.user_id === newCarValues.user_id;

        let index = newList.findIndex(search);

        newList[index].currentCar = newCarValues;

        this.setState({ allUsersData: newList, message: true });
        this.close();

        setTimeout(() => {
            this.closeMessage()
        }, 3000)
    };

    render() {
        // test
        this.getAllCarsData()
        return (
            <>
                {/* <Header /> */}
                {/* //////////////////////////////////////////       DEVELOPING FASE        /////////////////////////////////// */}

                {/* Main Table */}
                <Table
                    tableData={this.getAllUsersData()}
                    dataBaseName={'users'}
                    dataColumnsConfig={
                        [
                            {
                                header: 'Nome',
                                dataKeyRow: 'userFirstName',
                                dataRowType: 'span'
                            },
                            {
                                header: 'Nascimento',
                                dataKeyRow: 'userBirth',
                                dataRowType: 'span'
                            },
                            {
                                header: 'Salário',
                                dataKeyRow: 'userSalary',
                                dataRowType: 'span'
                            },
                            {
                                header: 'Carro',
                                dataKeyRow: 'none',
                                dataRowType: 'button',
                                value: 'Visualizar'
                            },
                            {
                                header: 'Status',
                                dataKeyRow: 'none',
                                dataRowType: 'icon'
                            }
                        ]
                    }
                />

                {/* car Table */}
                <Table
                    tableData={this.getAllCarsData()}
                    dataBaseName={'cars'}
                    dataColumnsConfig={
                        [
                            {
                                header: 'Carro',
                                dataKeyRow: 'carName'
                            },
                            {
                                header: 'Model',
                                dataKeyRow: 'carModel'
                            },
                            {
                                header: 'Fabricante',
                                dataKeyRow: 'carManufacturer'
                            },
                            {
                                header: 'Gasolina',
                                dataKeyRow: 'carFuel'
                            },
                            {
                                header: 'Tipo',
                                dataKeyRow: 'carType'
                            }
                        ]
                    }
                />

                {/* //////////////////////////////////       ALREADY WORKING      /////////////////////////////////////// */}
                <div style={{ width: '100%', height: '100%' }}>
                    <CustomMessage
                        name='Salvo com sucesso'
                        message={this.closeMessage}
                        toggleMessage={this.state.message}
                    />
                </div>
            </>
        )
    };
};
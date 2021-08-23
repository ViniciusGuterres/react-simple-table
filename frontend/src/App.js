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
import CustomMessage from './components/customMenssage';
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

        this.showCar = this.showCar.bind(this);
        this.close = this.close.bind(this);
        this.saveCarForm = this.saveCarForm.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        this.state = {
            allUsersData: this.userList,
            message: false
        };
    };

    getAllUsersData() {

        return (
            this.state.allUsersData.map(user => {

                const allUserDataObj = {

                    // User datas
                    userId: user.user_id ? user.user_id : '',
                    userFirstName: user.user_first_name ? user.user_first_name : '',
                    userBirth: user.user_birth_date ? user.user_birth_date : '',

                    // User car datas
                    userCarId: user.currentCar && user.currentCar.car_id ? user.currentCar.car_id : '',
                    userCar: user.currentCar && user.currentCar.car_name ? user.currentCar.car_name : '',
                    userCarModel: user.currentCar && user.currentCar.car_model ? user.currentCar.car_model : '',
                    userCarType: user.currentCar && user.currentCar.car_type ? user.currentCar.car_type : '',
                    userCarManufacturer: user.currentCar && user.currentCar.car_manufacturer ? user.currentCar.car_manufacturer : '',
                    userCarFuel: user.currentCar && user.currentCar.car_fuel ? user.currentCar.car_fuel : '',

                    // User job datas
                    userJobTitle: user.currentJob && user.currentJob.user_job_title ? user.currentJob.user_job_title : '',
                    userJobAddress: user.currentJob && user.currentJob.user_job_address ? user.currentJob.user_job_address : '',
                    userJobSalary: user.currentJob && user.currentJob.user_job_salary ? user.currentJob.user_job_salary : '',
                    userSalarySymbol: user.currentJob && user.currentJob.user_job_salary_currency_symbol ? user.currentJob.user_job_salary_currency_symbol : '',

                    // User product datas
                    userProductName: user.currentProduct && user.currentProduct.user_product_buyed_product_name ? user.currentProduct.user_product_buyed_product_name : '',
                    userProductAppliance: user.currentProduct && user.currentProduct.user_product_buyed_appliance ? user.currentProduct.user_product_buyed_appliance : '',
                    userProductPrice: user.currentProduct && user.currentProduct.user_product_buyed_product_price ? user.currentProduct.user_product_buyed_product_price : '',
                    userProductDescription: user.currentProduct && user.currentProduct.user_product_buyed_product_description ? user.currentProduct.user_product_buyed_product_description : '',
                    userProductIndusty: user.currentProduct && user.currentProduct.user_product_buyed_business_industy ? user.currentProduct.user_product_buyed_business_industy : '',
                    userProductTechnology: user.currentProduct && user.currentProduct.user_product_buyed_business_technology ? user.currentProduct.user_product_buyed_business_technology : '',
                    userProductDepartmente: user.currentProduct && user.currentProduct.user_product_buyed_commerce_department ? user.currentProduct.user_product_buyed_commerce_department : '',
                    userProductCompanyName: user.currentProduct && user.currentProduct.user_product_buyed_company_name ? user.currentProduct.user_product_buyed_company_name : '',
                    userProductMaterial: user.currentProduct && user.currentProduct.user_product_buyed_product_material ? user.currentProduct.user_product_buyed_product_material : '',

                    // User address datas
                    userAddressStreet: user.currentAddress && user.currentAddress.user_address_street_address ? user.currentAddress.user_address_street_address : '',
                    userAddressName: user.currentAddress && user.currentAddress.user_address_street_name ? user.currentAddress.user_address_street_name : '',
                    userAddressSufix: user.currentAddress && user.currentAddress.user_address_street_sufix ? user.currentAddress.user_address_street_sufix : '',
                    userAddressCity: user.currentAddress && user.currentAddress.user_address_city ? user.currentAddress.user_address_city : '',
                    userAddressCityPrefix: user.currentAddress && user.currentAddress.user_address_city_prefix ? user.currentAddress.user_address_city_prefix : '',
                    userAddressSecondary: user.currentAddress && user.currentAddress.user_address_secondary_address ? user.currentAddress.user_address_secondary_address : '',
                    userAddressDirection: user.currentAddress && user.currentAddress.user_address_address_direction ? user.currentAddress.user_address_address_direction : '',
                    userState: user.currentAddress && user.currentAddress.user_address_state ? user.currentAddress.user_address_state : '',
                    userCountry: user.currentAddress && user.currentAddress.user_address_country ? user.currentAddress.user_address_country : '',

                    // User access
                    userBusinessTechnoloy: user.currentAccess && user.currentAccess.user_access_business_technoloy ? user.currentAccess.user_access_business_technoloy : '',
                    userIpAddress: user.currentAccess && user.currentAccess.user_access_ip_address ? user.currentAccess.user_access_ip_address : '',
                    userMacAddress: user.currentAccess && user.currentAccess.user_access_mac_address ? user.currentAccess.user_access_mac_address : '',
                    userAccessAgent: user.currentAccess && user.currentAccess.user_access_user_agent ? user.currentAccess.user_access_user_agent : '',
                    userAccessLogin: user.currentAccess && user.currentAccess.user_access_login ? user.currentAccess.user_access_login : '',
                };

                // handle with access agent, using the UAParser Object
                let uaParser = new UAParser();
                uaParser.setUA(allUserDataObj.userAccessAgent);

                // get the OS name and current version
                let uaParserResult = uaParser.getResult();
                let osName = uaParserResult.os.name;
                let osVersion = uaParserResult.os.version;

                // config to show all users content in each row body
                const extendedContentConfigAllData = [
                    {
                        title: 'Emprego',
                        fieldsNames: [
                            {
                                label: 'Emprego',
                                values: allUserDataObj.userJobTitle
                            },
                            {
                                label: 'Endereço',
                                values: allUserDataObj.userJobAddress
                            },
                            {
                                label: 'Salário',
                                values: allUserDataObj.userSalary
                            }
                        ]
                    },
                    {
                        title: 'Usuário',
                        fieldsNames: [
                            {
                                label: 'Nome',
                                values: allUserDataObj.userFirstName
                            },
                            {
                                label: 'Nascimento',
                                values: allUserDataObj.userBirth
                            }
                        ]
                    },
                    {
                        title: 'Acessos',
                        fieldsNames: [
                            {
                                label: 'Tecnologia',
                                values: allUserDataObj.userBusinessTechnoloy
                            },
                            {
                                label: 'Endereço de Ip',
                                values: allUserDataObj.userIpAddress
                            },
                            {
                                label: 'Endereço mac',
                                values: allUserDataObj.userMacAddress
                            },
                            {
                                label: 'login',
                                values: allUserDataObj.userAccessLogin
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
                                values: allUserDataObj.userProductName
                            },
                            {
                                label: 'Empresa',
                                values: allUserDataObj.userProductCompanyName
                            },
                            {
                                label: 'Departamento',
                                values: allUserDataObj.userProductDepartmente
                            },
                            {
                                label: 'Indústria',
                                values: allUserDataObj.userProductIndusty
                            },
                            {
                                label: 'Preço',
                                values: `${allUserDataObj.userSalarySymbol} ${allUserDataObj.userProductPrice}`
                            },
                            {
                                label: 'tecnologia utilizada',
                                values: allUserDataObj.userProductTechnology
                            },
                            {
                                label: 'Material',
                                values: allUserDataObj.userProductMaterial
                            },
                            {
                                label: 'Utensílio',
                                values: allUserDataObj.userProductAppliance
                            },
                            {
                                label: 'Descrição',
                                values: allUserDataObj.userProductDescription
                            },
                        ]
                    },
                    {
                        title: 'Endereço',
                        fieldsNames: [
                            {
                                label: 'Rua',
                                values: allUserDataObj.userAddressStreet
                            },
                            {
                                label: 'Nome',
                                values: allUserDataObj.userAddressName
                            },
                            {
                                label: 'Cidade',
                                values: `${allUserDataObj.userAddressCityPrefix} ${allUserDataObj.userAddressCity}`
                            },
                            {
                                label: 'Endereço secundário',
                                values: allUserDataObj.userAddressSecondary
                            },
                            {
                                label: 'Direção',
                                values: allUserDataObj.userAddressDirection
                            },
                            {
                                label: 'Estado',
                                values: `${allUserDataObj.userState} - ${allUserDataObj.userCountry}`
                            }
                        ]
                    },
                    {
                        title: 'Carro',
                        fieldsNames: [
                            {
                                label: 'Carro',
                                values: allUserDataObj.userCar
                            },
                            {
                                label: 'Modelo',
                                values: allUserDataObj.userModel
                            },
                            {
                                label: 'Fabricante',
                                values: allUserDataObj.userBrand
                            },
                            {
                                label: 'Tipo',
                                values: allUserDataObj.userType
                            },
                            {
                                label: 'Gasolina',
                                values: allUserDataObj.userFuel
                            }
                        ]
                    }
                ];

                // body extend for car
                // const extendedContentConfigCurrentCarOwns = [
                //     {
                //         title: 'Dono',
                //         fieldsNames: [
                //             {
                //                 label: 'Nome',
                //                 values: allDataObj.userFirstname
                //             },
                //             {
                //                 label: 'Nascimento',
                //                 values: allDataObj.userBirth
                //             },
                //             {
                //                 label: 'Salário',
                //                 values: `${userSalarySymbol} ${userSalary.replace('.', ',')}`
                //             }
                //         ]
                //     },
                // ];

                // tables content
                const tableData = [
                    {
                        // dataBaseName: 'users',
                        allDataBaseValues: allUserDataObj,
                        extendedContentConfig: extendedContentConfigAllData
                    },
                    // {
                    //     allDataBaseValues: allDataObj,
                    //     extendedContentConfig: extendedContentConfigCurrentCarOwns
                    // }
                ]

                return (tableData);
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

        return (
            <>
                {/* <Header /> */}
                {/* //////////////////////////////////////////       DEVELOPING FASE        /////////////////////////////////// */}

                {/* Main Table */}
                <Table
                    tableData={this.getAllUsersData()}
                    // dataBaseName={'users'}
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
                                dataKeyRow: 'userJobSalary',
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
                    tableData={this.getAllUsersData()}
                    dataColumnsConfig={
                        [
                            {
                                header: 'Carro',
                                dataKeyRow: 'userCar'
                            },
                            {
                                header: 'Model',
                                dataKeyRow: 'userCarModel'
                            },
                            {
                                header: 'Fabricante',
                                dataKeyRow: 'userCarManufacturer'
                            },
                            {
                                header: 'Gasolina',
                                dataKeyRow: 'userCarFuel'
                            },
                            {
                                header: 'Tipo',
                                dataKeyRow: 'userCarType'
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

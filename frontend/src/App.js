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
import Table from './components/table';
import ContentCard from './components/contentCard';
import NavMenu from './components/navMenu';
import Modal from './components/modal';
import CustomMessage from './components/customMessage';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);

        // configs of data colums per custom tables
        this.extendRowBodyTableCarOwnersConfig = [
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
                dataKeyRow: 'userSalaryHandled',

                dataRowType: 'span'
            }
        ];

        this.tableCarsConfig = [
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
        ];

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
            }

            if (addressData[addressId]) {
                userData.currentAddress = addressData[addressId];
            }

            if (accessData[accessId]) {
                userData.currentAccess = accessData[accessId];
            }

            if (productsData[productsId]) {
                userData.currentProduct = productsData[productsId];
            }

            if (carsData[carId]) {
                userData.currentCar = carsData[carId];
            }

            return userData;
        });

        this.saveModalNewAlterations = this.saveModalNewAlterations.bind(this);
        this.renderExtendRowBodyTableCarOwners = this.renderExtendRowBodyTableCarOwners.bind(this);
        this.renderExtendRowBodyCardMenuUsers = this.renderExtendRowBodyCardMenuUsers.bind(this);
        this.selectMenuContent = this.selectMenuContent.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveModal = this.saveModal.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        this.state = {
            allUsersData: this.userList,
            allCarsData: Object.values(carsData),
            selectedMenu: 'Carro',
            showModal: null,
            message: false
        };
    };

    getAllUsersData() {

        return (
            this.state.allUsersData.map((user) => {

                // handle with user salary data
                const userJobSalary = user.currentJob && user.currentJob.user_job_salary ? user.currentJob.user_job_salary : 'Sem salário';
                const userSalarySymbol = user.currentJob && user.currentJob.user_job_salary_currency_symbol ? user.currentJob.user_job_salary_currency_symbol : '';
                const userSalaryHandled = `${userSalarySymbol}: ${userJobSalary.replace('.', ',')}`

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
                    userJobTitle: user.currentJob && user.currentJob.user_job_title ? user.currentJob.user_job_title : 'Desempregado',
                    userJobAddress: user.currentJob && user.currentJob.user_job_address ? user.currentJob.user_job_address : 'Desempregado',
                    userSalaryHandled,

                    // User product datas
                    userProductName: user.currentProduct && user.currentProduct.user_product_buyed_product_name ?
                        user.currentProduct.user_product_buyed_product_name : '',
                    userProductAppliance: user.currentProduct && user.currentProduct.user_product_buyed_appliance ?
                        user.currentProduct.user_product_buyed_appliance : '',
                    userProductPrice: user.currentProduct && user.currentProduct.user_product_buyed_product_price ?
                        user.currentProduct.user_product_buyed_product_price : '',
                    userProductDescription: user.currentProduct && user.currentProduct.user_product_buyed_product_description ?
                        user.currentProduct.user_product_buyed_product_description : '',
                    userProductIndusty: user.currentProduct && user.currentProduct.user_product_buyed_business_industy ?
                        user.currentProduct.user_product_buyed_business_industy : '',
                    userProductTechnology: user.currentProduct && user.currentProduct.user_product_buyed_business_technology ?
                        user.currentProduct.user_product_buyed_business_technology : '',
                    userProductDepartmente: user.currentProduct && user.currentProduct.user_product_buyed_commerce_department ?
                        user.currentProduct.user_product_buyed_commerce_department : '',
                    userProductCompanyName: user.currentProduct && user.currentProduct.user_product_buyed_company_name ?
                        user.currentProduct.user_product_buyed_company_name : '',
                    userProductMaterial: user.currentProduct && user.currentProduct.user_product_buyed_product_material ?
                        user.currentProduct.user_product_buyed_product_material : '',


                    // User address datas
                    userAddressStreet: user.currentAddress && user.currentAddress.user_address_street_address ?
                        user.currentAddress.user_address_street_address : '',
                    userAddressName: user.currentAddress && user.currentAddress.user_address_street_name ?
                        user.currentAddress.user_address_street_name : '',
                    userAddressSufix: user.currentAddress && user.currentAddress.user_address_street_sufix ?
                        user.currentAddress.user_address_street_sufix : '',
                    userAddressCity: user.currentAddress && user.currentAddress.user_address_city ?
                        user.currentAddress.user_address_city : '',
                    userAddressCityPrefix: user.currentAddress && user.currentAddress.user_address_city_prefix ?
                        user.currentAddress.user_address_city_prefix : '',
                    userAddressSecondary: user.currentAddress && user.currentAddress.user_address_secondary_address ?
                        user.currentAddress.user_address_secondary_address : '',
                    userAddressDirection: user.currentAddress && user.currentAddress.user_address_address_direction ?
                        user.currentAddress.user_address_address_direction : '',
                    userState: user.currentAddress && user.currentAddress.user_address_state ?
                        user.currentAddress.user_address_state : '',
                    userCountry: user.currentAddress && user.currentAddress.user_address_country ?
                        user.currentAddress.user_address_country : '',

                    // User access
                    userBusinessTechnoloy: user.currentAccess && user.currentAccess.user_access_business_technoloy ?
                        user.currentAccess.user_access_business_technoloy : '',
                    userIpAddress: user.currentAccess && user.currentAccess.user_access_ip_address ?
                        user.currentAccess.user_access_ip_address : '',
                    userMacAddress: user.currentAccess && user.currentAccess.user_access_mac_address ?
                        user.currentAccess.user_access_mac_address : '',
                    userAccessAgent: user.currentAccess && user.currentAccess.user_access_user_agent ?
                        user.currentAccess.user_access_user_agent : '',
                    userAccessLogin: user.currentAccess && user.currentAccess.user_access_login ?
                        user.currentAccess.user_access_login : '',
                };

                // all modaConfig and data
                const modalCarDatas = {
                    userCar: allUserDataObj.userCar,
                    userId: allUserDataObj.userId,
                    userModel: allUserDataObj.userCarModel,
                    userBrand: allUserDataObj.userCarManufacturer,
                    userType: allUserDataObj.userCarType,
                    userFuel: allUserDataObj.userCarFuel

                };

                // tables content
                const tableData = [
                    {
                        // dataBaseName: 'users',
                        allDataBaseValues: allUserDataObj,
                        // extendedContentConfig: extendedContentConfigAllData,
                        modalConfig: modalCarDatas
                    }
                ];

                return (tableData);
            })
        );
    };

    getAllCarsData() {
        return (
            this.state.allCarsData.map(car => {

                const allCarDataObj = {
                    // car datas
                    carId: car.car_id ? car.car_id : '',
                    carName: car.car_name ? car.car_name : '',
                    carManufacturer: car.car_manufacturer ? car.car_manufacturer : '',
                    carModel: car.car_model ? car.car_model : '',
                    carFuel: car.car_fuel ? car.car_fuel : '',
                    carType: car.car_type ? car.car_type : '',
                };

                const extendedContentConfigAllData = [
                    {
                        title: 'Donos',
                        fieldsNames: [
                            {
                                label: 'Emprego',
                                values: allCarDataObj.carId
                            },
                            {
                                label: 'Endereço',
                                values: allCarDataObj.carName
                            },
                            {
                                label: 'Salário',
                                values: allCarDataObj.carManufacturer

                            }
                        ]
                    },
                ];

                // tables content
                const tableData = [
                    {
                        allDataBaseValues: allCarDataObj,
                        extendedContentConfig: extendedContentConfigAllData
                    }
                ];

                return tableData
            })
        );
    };

    // save a new user list with some alterations from modal form component
    saveModalNewAlterations(newEditedValues) {
        // searching the alterated id user 
        let newList = [...this.state.allUsersData];
        const search = element => element.user_id === newEditedValues.user_id;
        let index = newList.findIndex(search);

        newList[index].currentCar = newEditedValues;

        this.setState({
            allUsersData: newList,
        });
    };

    // just set the menu clicked returned by NavMenu component
    selectMenuContent(menuTitle) {
        this.setState({ selectedMenu: menuTitle })
    };

    renderExtendRowBodyTableCarOwners(ownersId) {
        // get all cars owners 
        let filtered = data.filter((user) => {
            return user.user_car_id === ownersId.carId
        });

        // get all owners data and retur a object to put in the tableData props
        const owenersData = filtered.map(owner => {

            const allOwnersCarDataObj = {
                userFirstName: owner.user_first_name || '',
                userBirth: owner.user_birth_date || '',
                userSalaryHandled: owner.currentJob.user_job_salary || ''
            };

            const tableData = [{ allDataBaseValues: allOwnersCarDataObj }];

            return tableData;
        });

        return (
            <ContentCard
                content={[{ title: 'Donos' }]}
            >
                {
                    filtered.length > 0 ?
                        <Table
                            tableData={owenersData}
                            dataColumnsConfig={this.extendRowBodyTableCarOwnersConfig}
                        />
                        :
                        <h1>Sem donos</h1>
                }
            </ContentCard>
        )
    };

    renderExtendRowBodyCardMenuUsers(userData) {
        console.log(userData.userId);
        // handle with access agent, using the UAParser Object
        let uaParser = new UAParser();
        uaParser.setUA(userData.userAccessAgent);

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
                        values: userData.userJobTitle
                    },
                    {
                        label: 'Endereço',
                        values: userData.userJobAddress
                    },
                    {
                        label: 'Salário',
                        values: userData.userSalaryHandled

                    }
                ]
            },
            {
                title: 'Usuário',
                fieldsNames: [
                    {
                        label: 'Nome',
                        values: userData.userFirstName
                    },
                    {
                        label: 'Nascimento',
                        values: userData.userBirth
                    }
                ]
            },
            {
                title: 'Acessos',
                fieldsNames: [
                    {
                        label: 'Tecnologia',
                        values: userData.userBusinessTechnoloy
                    },
                    {
                        label: 'Endereço de Ip',
                        values: userData.userIpAddress
                    },
                    {
                        label: 'Endereço mac',
                        values: userData.userMacAddress
                    },
                    {
                        label: 'login',
                        values: userData.userAccessLogin
                    },
                    {
                        label: 'OS',
                        values: `${osName} ${osVersion}`
                    },
                ]
            },
            {
                title: 'Produto',
                fieldsNames: [
                    {
                        label: 'nome',
                        values: userData.userProductName
                    },
                    {
                        label: 'Empresa',
                        values: userData.userProductCompanyName
                    },
                    {
                        label: 'Departamento',
                        values: userData.userProductDepartmente
                    },
                    {
                        label: 'Indústria',
                        values: userData.userProductIndusty
                    },
                    {
                        label: 'Preço',
                        values: `${userData.userSalarySymbol} ${userData.userProductPrice}`
                    },
                    {
                        label: 'tecnologia utilizada',
                        values: userData.userProductTechnology
                    },
                    {
                        label: 'Material',
                        values: userData.userProductMaterial
                    },
                    {
                        label: 'Utensílio',
                        values: userData.userProductAppliance
                    },
                    {
                        label: 'Descrição',
                        values: userData.userProductDescription
                    },
                ]
            },
            {
                title: 'Endereço',
                fieldsNames: [
                    {
                        label: 'Rua',
                        values: userData.userAddressStreet
                    },
                    {
                        label: 'Nome',
                        values: userData.userAddressName
                    },
                    {
                        label: 'Cidade',
                        values: `${userData.userAddressCityPrefix} ${userData.userAddressCity}`
                    },
                    {
                        label: 'Endereço secundário',
                        values: userData.userAddressSecondary
                    },
                    {
                        label: 'Direção',
                        values: userData.userAddressDirection
                    },
                    {
                        label: 'Estado',
                        values: `${userData.userState} - ${userData.userCountry}`
                    }
                ]
            },
            {
                title: 'Carro',
                fieldsNames: [
                    {
                        label: 'Carro',
                        values: userData.userCar
                    },
                    {
                        label: 'Modelo',
                        values: userData.userCarModel
                    },
                    {
                        label: 'Fabricante',
                        values: userData.userCarManufacturer
                    },
                    {
                        label: 'Tipo',
                        values: userData.userCarType
                    },
                    {
                        label: 'Gasolina',
                        values: userData.userCarFuel
                    }
                ]
            }
        ];

        // refactor
        // filter the selected menu and pass as props to the contentCard component
        const currentSelectedMenu = extendedContentConfigAllData.filter(item => {
            let currentItem;
            if (item.title === this.state.selectedMenu) {
                currentItem = item;
            }
            return currentItem;
        });


        return (
            <div style={{ display: 'flex' }}>

                {
                    <NavMenu
                        selectMenu={this.selectMenuContent}
                        titles={[
                            { title: 'Carro' },
                            { title: 'Emprego' },
                            { title: 'Produto' },
                            { title: 'Acessos' },
                            { title: 'Endereço' }
                        ]}
                    />
                }

                {/* when clicks at one of the menus above, render the current menu select data at the content card */}
                {
                    this.state.selectedMenu ?
                        <ContentCard
                            content={currentSelectedMenu}
                        />
                        :
                        null
                }
            </div>
        )
    };

    // modal functions
    showModal(obj) {
        this.setState({ showModal: obj })
    };

    closeModal() {
        this.setState({ showModal: null })
    };

    saveModal(editedData) {
        // passing the editedData to the root state keeper
        this.saveModalNewAlterations(editedData);

        this.setState({ message: true })

        setTimeout(() => {
            this.closeMessage()
        }, 3000)
    };

    renderModal() {
        return (
            <Modal
                carObject={this.state.showModal}
                close={this.closeModal}
                saveAlterations={this.saveModal}
            />
        );
    };

    closeMessage() {
        this.setState({ message: false })
    }

    render() {
        return (
            <>
                <CustomMessage
                    name='Salvo com sucesso'
                    message={this.closeMessage}
                    toggleMessage={this.state.message}
                />
                {
                    this.state.showModal ?
                        this.renderModal() :
                        null

                }
                {/* Main Table */}
                <div style={{ height: '100vh'}}>

                    <div style={{ height: '50vh', overflowY: 'scroll'}}>

                        <Table
                            tableData={this.getAllUsersData()}
                            showModal={this.showModal}
                            saveModalNewAlterations={this.saveModalNewAlterations}
                            extendRowContent={this.renderExtendRowBodyCardMenuUsers}
                            isExtendable={true}
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
                                        dataKeyRow: 'userSalaryHandled',
                                        dataRowType: 'span'
                                    },
                                    {
                                        header: 'Carro',
                                        dataKeyRow: 'none',
                                        dataRowType: 'button',
                                        value: 'Visualizar',
                                        click: this.renderModal
                                    },
                                    {
                                        header: 'Status',
                                        dataRowType: 'icon'
                                    }
                                ]
                            }
                        />
                    </div>

                    {/* car Table */}
                    <div style={{ height: '50vh',overflowY: 'scroll' }}>
                        <Table
                            tableData={this.getAllCarsData()}
                            dataColumnsConfig={this.tableCarsConfig}
                            extendRowContent={this.renderExtendRowBodyTableCarOwners}
                            isExtendable={true}
                        />
                    </div>
                </div>
            </>
        )
    };
};
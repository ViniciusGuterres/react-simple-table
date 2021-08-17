import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import data from './users/users';
import jobData from './users/users_job';
import carsData from './users/users_cars';
import addressData from './users/users_address';
import accessData from './users/users_access';
import productsData from './users/users_products_buyed';

import ModalCar from './components/modalCar';
import CustomMessage from './components/customMenssage/CustomMenssage';
import TableRow from './components/tableRow';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.userList = data.map(user => {
            const userData = user;
            const jobId = userData.user_job_id;
            const carId = userData.user_car_id;
            const accessId = userData.user_access_id;
            const productsId = userData.user_product_buyed_id;
            const addressId = userData.user_access_id;

            if (jobData[jobId]) {
                userData.currentJob = jobData[jobId];
                userData.title = "emprego";
            };

            if (carsData[carId]) {
                userData.currentCar = carsData[carId];
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

            return userData;
        });

        this.state = {
            showModalCar: null,
            allUsersData: this.userList,
            message: false
        };

        this.showCar = this.showCar.bind(this);
        this.close = this.close.bind(this);
        this.saveCarForm = this.saveCarForm.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
    };

    renderRows() {
        return (
            this.state.allUsersData.map((user, index) => {

                // maping all users data
                const userId = user.user_id ? user.user_id : '';
                const userFirstName = user.user_first_name ? user.user_first_name : '';
                const userBirth = user.user_birth_date ? user.user_birth_date : '';
                const userGender = user.user_gender ? user.user_gender : '';

                const userJobTitle = user.currentJob && user.currentJob.user_job_title ? user.currentJob.user_job_title : '';
                const userJobAddress = user.currentJob && user.currentJob.user_job_address ? user.currentJob.user_job_address : '';
                const userSalary = user.currentJob && user.currentJob.user_job_salary ? user.currentJob.user_job_salary : '';
                const userSalarySymbol = user.currentJob && user.currentJob.user_job_salary_currency_symbol ? user.currentJob.user_job_salary_currency_symbol : '';

                const userCarId = user.currentCar && user.currentCar.car_id ? user.currentCar.car_id : '';
                const userCar = user.currentCar && user.currentCar.car_name ? user.currentCar.car_name : '';
                const userModel = user.currentCar && user.currentCar.car_model ? user.currentCar.car_model : '';
                const userType = user.currentCar && user.currentCar.car_type ? user.currentCar.car_type : '';
                const userBrand = user.currentCar && user.currentCar.car_manufacturer ? user.currentCar.car_manufacturer : '';
                const userFuel = user.currentCar && user.currentCar.car_fuel ? user.currentCar.car_fuel : '';

                const userProductAppliance = user.currentProduct && user.currentProduct.user_product_buyed_appliance ? user.currentProduct.user_product_buyed_appliance : '';
                const userProductIndusty = user.currentProduct && user.currentProduct.user_product_buyed_business_industy ? user.currentProduct.user_product_buyed_business_industy : '';
                const userProductTechnology = user.currentProduct && user.currentProduct.user_product_buyed_business_technology ? user.currentProduct.user_product_buyed_business_technology : '';
                const userProductDepartmente = user.currentProduct && user.currentProduct.user_product_buyed_commerce_department ? user.currentProduct.user_product_buyed_commerce_department : '';
                const userProductCompanyName = user.currentProduct && user.currentProduct.user_product_buyed_company_name ? user.currentProduct.user_product_buyed_company_name : '';
                const userProductName = user.currentProduct && user.currentProduct.user_product_buyed_product_name ? user.currentProduct.user_product_buyed_product_name : '';
                const userProductDescription = user.currentProduct && user.currentProduct.user_product_buyed_product_description ? user.currentProduct.user_product_buyed_product_description : '';
                const userProductMaterial = user.currentProduct && user.currentProduct.user_product_buyed_product_material ? user.currentProduct.user_product_buyed_product_material : '';
                const userProductPrice = user.currentProduct && user.currentProduct.user_product_buyed_product_price ? user.currentProduct.user_product_buyed_product_price : '';

                const userAddressStreet = user.currentAddress && user.currentAddress.user_address_street_address ? user.currentAddress.user_address_street_address : '';
                const userAddressName = user.currentAddress && user.currentAddress.user_address_street_name ? user.currentAddress.user_address_street_name : '';
                const userAddressSufix = user.currentAddress && user.currentAddress.user_address_street_sufix ? user.currentAddress.user_address_street_sufix : '';
                const userAddressCity = user.currentAddress && user.currentAddress.user_address_city ? user.currentAddress.user_address_city : '';
                const userAddressCityPrefix = user.currentAddress && user.currentAddress.user_address_city_prefix ? user.currentAddress.user_address_city_prefix : '';
                const userAddressSecondary = user.currentAddress && user.currentAddress.user_address_secondary_address ? user.currentAddress.user_address_secondary_address : '';
                const userAddressDirection = user.currentAddress && user.currentAddress.user_address_address_direction ? user.currentAddress.user_address_address_direction : '';
                const userState = user.currentAddress && user.currentAddress.user_address_state ? user.currentAddress.user_address_state : '';
                const userCountry = user.currentAddress && user.currentAddress.user_address_country ? user.currentAddress.user_address_country : '';

                // adding all datas in a object to pass as a props
                const userObj = {
                    userFirstName,
                    userBirth,
                    userGender,
                };

                const addressObj = {
                    userAddressStreet,
                    userAddressName,
                    userAddressSufix,
                    userAddressCity,
                    userAddressCityPrefix,
                    userAddressSecondary,
                    userAddressDirection,
                    userState,
                    userCountry
                };

                const productObj = {
                    userProductAppliance,
                    userProductIndusty,
                    userProductTechnology,
                    userProductDepartmente,
                    userProductCompanyName,
                    userProductName,
                    userProductDescription,
                    userProductMaterial,
                    userProductPrice
                };

                const carObj = {
                    userId,
                    userCarId,
                    userCar,
                    userModel,
                    userType,
                    userBrand,
                    userFuel
                };

                const accessObj = {
                    userAccessId:
                        user.currentAccess && user.currentAccess.user_access_id ?
                            user.currentAccess.user_access_id : '',
                    userBusinessTechnoloy:
                        user.currentAccess && user.currentAccess.user_access_business_technoloy ?
                            user.currentAccess.user_access_business_technoloy : '',
                    userIpAddress:
                        user.currentAccess && user.currentAccess.user_access_ip_address ?
                            user.currentAccess.user_access_ip_address : '',
                    userMacAddress:
                        user.currentAccess && user.currentAccess.user_access_mac_address ?
                            user.currentAccess.user_access_mac_address : '',
                    userAccessAgent:
                        user.currentAccess && user.currentAccess.user_access_user_agent ?
                            user.currentAccess.user_access_user_agent : '',
                    userAccessLogin:
                        user.currentAccess && user.currentAccess.user_access_login ?
                            user.currentAccess.user_access_login : ''
                };

                const jobObj = {
                    userJobTitle,
                    userJobAddress,
                    userSalary,
                    userSalarySymbol
                };

                // config to show all users content in each row body
                const extendedContentConfig = [
                    {
                        title: 'emprego',
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
                        title: 'usuário',
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
                                label: 'Gênero',
                                values: userGender
                            }
                        ]
                    },
                    {
                        title: 'acessos',
                        fieldsNames: [
                            {
                                label: 'Tecnologia',
                                values: accessObj.userBusinessTechnoloy
                            },
                            {
                                label: 'Endereço de Ip',
                                values: accessObj.userIpAddress
                            },
                            {
                                label: 'Endereço mac',
                                values: accessObj.userMacAddress
                            },
                            {
                                label: 'Agente',
                                values: accessObj.userAccessAgent
                            },
                            {
                                label: 'login',
                                values: accessObj.userAccessLogin
                            }
                        ]
                    },
                    {
                        title: 'produtos',
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
                        title: 'endereço',
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
                                label: 'Sufixo',
                                values: userAddressSufix
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
                        title: 'carro',

                        fieldsNames: [
                            {
                                label: 'Nome do carro',
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

                // toggle between online, offline and anonymous
                let iconName = userId % 2 == 0 ? faUser : faUserAltSlash;
                let iconBg = iconName == faUser ? '#3ade3a' : '#ff4a4a'

                if (userId % 5 === 0) {
                    iconName = faUserSecret;
                    iconBg = '#272222d9'
                };

                return (
                    <TableRow
                        index={index}
                        key={`Row ${index}`}
                        extendedContentConfig={extendedContentConfig}
                    >
                        <td>{userFirstName}</td>
                        <td>{userBirth}</td>
                        <td>{userGender}</td>
                        <td>{userJobTitle}</td>
                        <td>{`${userSalarySymbol}: ${userSalary.replace('.', ',')}`}</td>
                        <td>{userJobAddress}</td>
                        <td>
                            <button onClick={(event) => {
                                event.stopPropagation();
                                this.showCar(carObj);
                            }}>
                                Visualizar
                            </button>
                        </td>

                        {/* Online Icons Logic */}
                        <td>
                            <FontAwesomeIcon
                                style={{
                                    fontSize: '25px',
                                    color: iconBg
                                }}
                                icon={iconName}
                            />
                        </td>
                    </TableRow>
                );
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
            <div style={{ width: '100%', height: '100%' }}>
                <CustomMessage
                    name='Salvo com sucesso'
                    message={this.closeMessage}
                    toggleMessage={this.state.message}
                />

                {this.state.showModalCar ? this.renderModal() : null}


                <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>

                    <thead>

                        <tr style={{ background: '#2d485fc2', color: '#fff' }}>

                            <th>
                                <h1>Nome</h1>
                            </th>

                            <th>
                                <h1>Nascimento</h1>
                            </th>

                            <th>
                                <h1>Gênero</h1>
                            </th>

                            <th>
                                <h1>Emprego</h1>
                            </th>

                            <th>
                                <h1>Salário</h1>
                            </th>

                            <th>
                                <h1>Endereço</h1>
                            </th>

                            <th>
                                <h1>Carro</h1>
                            </th>

                            <th>
                                <h1>Online</h1>
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {this.renderRows()}

                    </tbody>

                </table>

            </div>

        )
    };
};
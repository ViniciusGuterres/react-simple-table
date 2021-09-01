const { Client } = require('pg')

// Ler arquivos
const usersList = require('../frontend/src/users/users.js');
const carsList = require('../frontend/src/users/users_cars.js');
const jobsList = require('../frontend/src/users/users_job.js');
const addressList = require('../frontend/src/users/users_address.js');
const productsList = require('../frontend/src/users/users_products_buyed.js');
const accessList = require('../frontend/src/users/users_access.js');

let usersInsertQuery = ` INSERT INTO users (first_name, birth_date, gender) VALUES`;
let carsInsertQuery = ` INSERT INTO cars (fuel, manufacturer, model, name, type) VALUES`;
let jobInsertQuery = ` INSERT INTO job (title, address, salary, salary_current_symbol) VALUES`;
let addressInsertQuery = ` INSERT INTO address (street_address, street_name, street_sufix, city, city_prefix, secondary_address, direction, state, country) VALUES`;
let productsInsertQuery = ` INSERT INTO products (appliance, business_industry, business_technology, commerce_department, company_name, name, description, material, price) VALUES`;
let accessInsertQuery = ` INSERT INTO access (business_technology, ip_address, mac_address, user_agent, login) VALUES`;

// relation tables
let userCarsInsertQuery = `INSERT INTO users_cars (user_id, car_id) VALUES`;
let userProductsInsertQuery = `INSERT INTO users_products (user_id, product_id) VALUES`;
let userJobsInsertQuery = `INSERT INTO users_jobs (user_id, job_id) VALUES`;
let userAddressInsertQuery = `INSERT INTO users_addresses (user_id, address_id) VALUES`;
let userAccessInserQuery = `INSERT INTO users_accesses (user_id, access_id) VALUES`;

const carListValues = Object.values(carsList);
const jobListValues = Object.values(jobsList);
const addressListValues = Object.values(addressList);
const productsListValues = Object.values(productsList);
const accessListValues = Object.values(accessList);

for (let j = 0; j < usersList.length; j++) {
    const user = usersList[j];
    const year = user.user_birth_date.substr(6, 4);
    const month = user.user_birth_date.substr(3, 2);
    const day = user.user_birth_date.substr(0, 2);
    const time = user.user_birth_date.substr(11, 8);
    const newBirthDate = `${year}-${month}-${day} ${time}`;

    if (month > 12 || day > 31)usersInsertQuery +=  `('${user.user_first_name}', '1970-01-01 00:00:00', null), ` 
    else usersInsertQuery +=  `('${user.user_first_name}', '${newBirthDate}', null), `
}

for (let j = 0; j < carListValues.length; j++) {
    const car = carListValues[j];
    carsInsertQuery += ` ('${car.car_fuel}','${car.car_manufacturer}','${car.car_model}','${car.car_name}','${car.car_type}'), `
}

for (let j = 0; j < jobListValues.length; j++) {
    job = jobListValues[j];
    newSalary = Number(job.user_job_salary);
    jobInsertQuery += ` ('${job.user_job_title}', '${job.user_job_address}', ${newSalary},'${job.user_job_salary_currency_symbol}'), `
};

for (let j = 0; j < addressListValues.length; j++) {
    address = addressListValues[j];
    addressInsertQuery += ` ('${address.user_address_street_address.replace("'", "`")}', '${address.user_address_street_name.replace("'", "`")}', '${address.user_address_street_sufix.replace("'", "`")}','${address.user_address_city.replace("'", "`")}', '${address.user_address_city_prefix.replace("'", "`")}', '${address.user_address_secondary_address.replace("'", "`")}','${address.user_address_address_direction.replace("'", "`")}', '${address.user_address_state.replace("'", "`")}', '${address.user_address_country.replace("'", "`")}'), `
};

for (let j = 0; j < productsListValues.length; j++) {
    product = productsListValues[j];
    productPrice = Number(product.user_product_buyed_product_price);
    productsInsertQuery += ` ('${product.user_product_buyed_appliance.replace("'", "`")}', '${product.user_product_buyed_business_industy.replace("'", "`")}', '${product.user_product_buyed_business_technology.replace("'", "`")}','${product.user_product_buyed_commerce_department.replace("'", "`")}', '${product.user_product_buyed_company_name.replace("'", "`")}', '${product.user_product_buyed_product_name.replace("'", "`")}','${product.user_product_buyed_product_description.replace("'", "`")}', '${product.user_product_buyed_product_material.replace("'", "`")}', ${productPrice}), `
};

for (let j = 0; j < accessListValues.length; j++) {
    access = accessListValues[j];

    accessInsertQuery += ` ('${access.user_access_business_technoloy}', '${access.user_access_ip_address}', '${access.user_access_mac_address}','${access.user_access_user_agent}', '${access.user_access_login}'), `
};

// relation tables 
for (let i = 0; i < 70; i++) {
    userCarsInsertQuery += ` (${Math.ceil(Math.random(0, 100) * 100)}, ${Math.ceil(Math.random(0, 100) * 100)}),`
}

for (let i = 0; i < 70; i++) {
    userProductsInsertQuery += ` (${Math.ceil(Math.random(0, 100) * 100)}, ${Math.ceil(Math.random(0, 100) * 100)}),`
}

for (let i = 0; i < 70; i++) {
    userJobsInsertQuery += ` (${Math.ceil(Math.random(0, 100) * 100)}, ${Math.ceil(Math.random(0, 100) * 100)}),`
}

for (let i = 0; i < 70; i++) {
    userAddressInsertQuery += ` (${Math.ceil(Math.random(0, 100) * 100)}, ${Math.ceil(Math.random(0, 100) * 100)}),`
}

for (let i = 0; i < 70; i++) {
    userAccessInserQuery += ` (${Math.ceil(Math.random(0, 100) * 100)}, ${Math.ceil(Math.random(0, 100) * 100)}),`
}

usersInsertQuery = usersInsertQuery.substr(0, usersInsertQuery.length - 2);
carsInsertQuery = carsInsertQuery.substr(0, carsInsertQuery.length - 2);
jobInsertQuery = jobInsertQuery.substr(0, jobInsertQuery.length - 2);
addressInsertQuery = addressInsertQuery.substr(0, addressInsertQuery.length - 2);
productsInsertQuery = productsInsertQuery.substr(0, productsInsertQuery.length - 2);
accessInsertQuery = accessInsertQuery.substr(0, accessInsertQuery.length - 2);
userCarsInsertQuery = userCarsInsertQuery.substr(0, userCarsInsertQuery.length - 1);
userProductsInsertQuery = userProductsInsertQuery.substr(0, userProductsInsertQuery.length - 1);
userJobsInsertQuery = userJobsInsertQuery.substr(0, userJobsInsertQuery.length - 1);
userAddressInsertQuery = userAddressInsertQuery.substr(0, userAddressInsertQuery.length - 1);
userAccessInserQuery = userAccessInserQuery.substr(0, userAccessInserQuery.length - 1);

console.log(userAccessInserQuery);

const allQuerys = [
    // userAccessInserQuery
    // userAddressInsertQuery
    // userJobsInsertQuery
    // userProductsInsertQuery
    // userCarsInsertQuery
    // usersInsertQuery,
    // carsInsertQuery,
    // jobInsertQuery,
    // addressInsertQuery,
    // productsInsertQuery,
    // accessInsertQuery,
];


// connect into the postgress db
const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'react_table_project',
    password: 'admin',
    port: 5432,
})

db.connect().then(async () => {
    console.log('--- db connected')
    db.query("SET search_path TO 'users_data';")

    for (let i = 0; i < allQuerys.length; i++) {
        await fillDataFunction(allQuerys[i])
    }

    db.end();
    process.exit();
})

function fillDataFunction(query) {
    console.log('-------------------------- comecando nova query --------------------------')
    const executeQuery = new Promise(
        (resolve, reject) => {

            db.query(query, (err, result) => {
                if (err) {
                    console.log('Erro ao executar insert')
                    console.log(err)
                    reject()
                } else {
                    console.log('Insert executado com sucesso')
                    console.log(result)
                    resolve()
                }
            })
        }
    )

    return executeQuery
}
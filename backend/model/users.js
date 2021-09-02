const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'react_table_project',
    password: 'admin',
    port: 5432
});

exports.data = function getAllUsersData() {

    const result = {
        err: null,
        data: null
    };
    
    const error = (err) => {
        db.end();

        result.err = err;
        
        return result;
    };

    const executeQuery = () => {

        const selectUsersQuery = "SELECT user_id, first_name, gender, birth_date FROM users_data.users;";

        const successful = (data) => {
            db.end();

            result.data = data.rows;

            return result;
        };

        return db.query(selectUsersQuery)
            .then(successful)
            .catch(error)
    }

    return db.connect()
        .then(executeQuery)
        .catch(error)
}
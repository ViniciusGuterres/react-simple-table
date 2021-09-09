const { Client } = require('pg');

exports.data = function getAllUsersData() {

    const db = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'react_table_project',
        password: 'admin',
        port: 5432
    });

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

        const selectUsersQuery = 
            `SELECT users.user_id, users.first_name, users.birth_date
            FROM users_data.users
            ORDER BY users.user_id;`;

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
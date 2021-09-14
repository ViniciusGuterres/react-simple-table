const { Client } = require('pg');

exports.allLogs = function selectUsersLogs() {

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

        const selectQuery = 
            `SELECT ip_address, agent, data, path
            FROM users_data.logs;`;

        const successful = (data) => {
            db.end();

            result.data = data.rows;

            return result;
        };

        return db.query(selectQuery)
            .then(successful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)

};
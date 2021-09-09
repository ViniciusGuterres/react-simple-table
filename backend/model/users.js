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

        //  old sql users data
        // const selectUsersQuery = "SELECT user_id, first_name, birth_date FROM users_data.users;";
        const selectUsersQuery = 
            `SELECT users.user_id, users.first_name, users.birth_date, job.salary, job.salary_current_symbol, job.title
            FROM users_data.users 
            LEFT JOIN users_data.users_jobs ON users_jobs.user_id = users.user_id
            LEFT JOIN users_data.job ON users_jobs.job_id = job.job_id
            ORDER BY users_data.users.first_name asc;`;

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
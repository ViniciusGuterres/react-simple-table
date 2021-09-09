const { stringify } = require('querystring');
const model = require('../model/users');

exports.list_all_users = async function (req, res) {

    const userData = await model.data();

    // handle with user birth date and remove the spaces at user name
    const handleUsersDatas = () => {
    
        return  userData.data.map(user => {

            const handledSalary = user.salary && user.salary_current_symbol ? `${user.salary_current_symbol.trim()}: ${user.salary}` : '';

            const birthDate = user.birth_date ? JSON.stringify(user.birth_date) : '';
            const year = birthDate.substr(1, 4);
            const month = birthDate.substr(6, 2);
            const day = birthDate.substr(9, 2);
            const handledDate = `${day}/${month}/${year}`;
            
            const objHandled = {
                user_id: user.user_id || '',
                first_name: user.first_name ? user.first_name.trim() : '',
                birth_date: handledDate,
                salary: handledSalary
            };

            return objHandled;
        });    
    }

    const data = await handleUsersDatas;

    res.json(data());
};


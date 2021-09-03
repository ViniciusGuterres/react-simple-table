const { stringify } = require('querystring');
const model = require('../model/users');

exports.list_all_users = async function (req, res) {

    const userData = await model.data();

    const handleUsersDatas = () => {
    
        return  userData.data.map(user => {
    
            const first_name = user.first_name.trim();

            const birthDate = JSON.stringify(user.birth_date);
            const year = birthDate.substr(1, 4);
            const month = birthDate.substr(6, 2);
            const day = birthDate.substr(9, 2);
            const handledDate = `${day}/${month}/${year}`;
            
            const objHandled = {
                user_id: user.user_id,
                first_name,
                birth_date: handledDate,
            };

            return objHandled;
        });    
    }

    const test = await handleUsersDatas;

    res.json(test());
};


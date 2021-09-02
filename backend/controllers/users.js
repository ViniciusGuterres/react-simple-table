const model = require('../model/users');

exports.list_all_users = async function (req, res) {

    const userData = await model.data();

    const handleUsersDatas = () => {
    
        return  userData.data.map(user => {
    
            const first_name = user.first_name.trim();

            const birthDate = new Date(user.birth_date);
            const day = birthDate.getDate();
            const month = birthDate.getMonth();
            const year = birthDate.getFullYear();
            const handledDate = `${day}/${month}/${year}`;
    
            const objHandled = {
                user_id: user.user_id,
                first_name,
                birth_date: handledDate
            };

            return objHandled;
        });    
    }

    const test = await handleUsersDatas;

    res.json(test());
};


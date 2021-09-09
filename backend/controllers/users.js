const model = require('../model/users');

exports.list_all_users = async function (req, res) {
    const userData = await model.data();

    // handle with user birth date and remove the spaces at user name
    const handleUsersDatas = () => {
    
        return userData.data.map(user => {
            
            if (user.user_id) {

                // handle with salary
                const handledSalary = user.salary && user.salary_current_symbol ? `${user.salary_current_symbol.trim()}: ${user.salary}` : '';
    
                // handle with birth date
                const birthDate = user.birth_date ? JSON.stringify(user.birth_date) : '';
                const year = birthDate.substr(1, 4);
                const month = birthDate.substr(6, 2);
                const day = birthDate.substr(9, 2);
                const handledDate = `${day}/${month}/${year}`;
                
                // handle with full user object
                const objHandled = {
                    user_id: user.user_id || '',
                    first_name: user.first_name ? user.first_name.trim() : '',
                    birth_date: handledDate,
                    currentJob: [
                        {
                            salary: handledSalary,
                            jobTitle: user.title ? user.title.trim() : ''
                        }
                    ]
    
                };

                return objHandled;

            }


        });    
    }

    const data = await handleUsersDatas;

    res.json(data());
};


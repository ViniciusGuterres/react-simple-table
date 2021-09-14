const model = require('../model/users');

exports.list_all_users = async function (req, res) {

    const userData = await model.data();
    const datas = userData.data || [];

    const allUsersDatas = [];
    const controlObj = {};

    for (let index = 0; index < datas.length; index++) {

        // just aux consts
        const user = userData.data[index];

        if (!controlObj[user.user_id] && controlObj[user.user_id] !== 0) {

            // handle with salary
            const handledSalary = user.salary && user.salary_current_symbol ? `${user.salary_current_symbol.trim()}: ${user.salary}` : '';

            // handle with birth date
            const birthDate = user.birth_date ? JSON.stringify(user.birth_date) : '';
            const year = birthDate.substr(1, 4);
            const month = birthDate.substr(6, 2);
            const day = birthDate.substr(9, 2);
            const handledDate = `${day}/${month}/${year}`;

            const userDatasHandled = {
                user_id: user.user_id || '',
                first_name: user.first_name ? user.first_name.trim() : '',
                birth_date: handledDate,
                jobs: [
                    {
                        job_id: user.job_id || '',
                        salary: handledSalary,
                        title: user.title ? user.title.trim() : ''
                    }
                ],
                cars: {
                    car_id: user.car_id || '',
                    name: user.name ? user.name.trim() : '',
                    manufacturer: user.manufacturer ? user.manufacturer.trim() : '',
                    type: user.type ? user.type.trim() : '',
                    fuel: user.fuel ? user.fuel.trim() : '',
                    model: user.model ? user.model.trim() : ''

                }
            };

            allUsersDatas.push(userDatasHandled);

            controlObj[user.user_id] = allUsersDatas.length - 1;


        } else {

            // handle with salary
            const handledSalary = user.salary && user.salary_current_symbol ? `${user.salary_current_symbol.trim()}: ${user.salary}` : '';

            const newJob = {
                salary: handledSalary,
                title: user.title ? user.title.trim() : ''
            };

            const userIndex = controlObj[user.user_id];

            allUsersDatas[userIndex].jobs.push(newJob);

        }
    }

    res.json(allUsersDatas);
};

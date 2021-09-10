const model = require('../model/users');

exports.list_all_users = async function (req, res) {
    const userData = await model.data();

    // handle with user birth date and remove the spaces at user name
    const handleUsersDatas = () => {

        const allUsersDatas = [];

        for (let index = 0; index < userData.data.length; index++) {
            
            // just aux consts
            const user = userData.data[index];
            const allUsers = userData.data;

            if (!user.handled) {

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
                            salary: handledSalary,
                            title: user.title ? user.title.trim() : ''
                        }
                    ]
                };

                /* 
                    recursive func that verify if the next person in the array is the same
                    if trues, will push the jobs informations
                    and prevent loop through duplicate person
                */
                function getPersonJobs(id) {

                    const nextPersonId = allUsers[id] && allUsers[id].user_id ?
                        allUsers[id].user_id : null;

                    const nextPerson = allUsers[id] || null;

                    if (user.user_id === nextPersonId) {

                        userDatasHandled.jobs.push({
                            salary: nextPerson.salary || '',
                            title: nextPerson.title ? nextPerson.title.trim() : ''
                        })

                        nextPerson.handled = true;

                        getPersonJobs(id + 1);
                    }

                }

                getPersonJobs(index + 1);

                allUsersDatas.push(userDatasHandled);
            }

        }

        return allUsersDatas;
    }

    const data = await handleUsersDatas;

    res.json(data());
};
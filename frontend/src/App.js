import React, { Component } from 'react';

import userData from './users/users';
// import userCar from './users/users_cars';
import userJob from './users/users_job';
// import userAdress from './users/users_address';
// import userAcess from './users/users_access';
// import userProduct from './users/users_products_buyed';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.userList = userData.map(user => {
      const userId = user.user_id;

      if (userJob[userId]) {
        user.currentJob = userJob[userId];
      };

      return user;
    });

    this.state = {

    };

  };

  renderRows() {
    return(
      userData.map((user, index) => {
        const userName = user.user_first_name ? user.user_first_name : '';
        const userBirth = user.user_birth_date ? user.user_birth_date : '';
        const userGender = user.user_gender ? user.user_gender : '';
        const userJobTitle = user.currentJob && user.currentJob.user_job_title ? user.currentJob.user_job_title : '';
        const userJobSalary = user.currentJob && user.currentJob.user_job_salary ? user.currentJob.user_job_salary : '';
        const userJobAddress = user.currentJob && user.currentJob.user_job_address ? user.currentJob.user_job_address : ''; 
        const userSalarySymbol = user.currentJob && user.currentJob.user_job_salary_currency_symbol ? user.currentJob.user_job_salary_currency_symbol : '';

        // toggle table rows background color
        const toggleRowsColor = (index % 2) ? '#ccc' : '';
        
        return(
          <tbody key={ index }>

            <tr style={{ backgroundColor: toggleRowsColor }}>

              <td>{ userName }</td>

              <td>{ userBirth }</td>

              <td>{ userGender }</td>

              <td>{ userJobTitle }</td>

              <td>{ `${userSalarySymbol}: ${userJobSalary.replace('.', ',')}` }</td>

              <td>{ userJobAddress }</td>

              <td>
                <button style={{ cursor: 'pointer' }}>
                  ^
                </button>
              </td>

            </tr>

          </tbody>
        );
      })
    );
  };

  render() {
    return(
      <div>

        <table style={{ width: '100%', textAlign: 'center'}}>

          <thead style={{ backgroundColor: '#1a6b96db', color: '#fff' }}>
            
            <tr>

              <td>
                <h1>Nome</h1>
              </td>

              <td>
                <h1>Nascimento</h1>
              </td>

              <td>
                <h1>Gênero</h1>
              </td>

              <td>
                <h1>Emprego</h1>
              </td>

              <td>
                <h1>Salário</h1>
              </td>

              <td>
                <h1>Endereço</h1>
              </td>

              <td>
                <h1>Carro</h1>
              </td>
              
            </tr>

          </thead>

          { this.renderRows() }

        </table>

      </div>
    );
  };
};
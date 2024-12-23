# SME Data Visualization App

## Features
- User Authentication
- Data Visualization
- Responsive Design

---

## Root Folder Setup

### Install Dependencies
Run the following command to install `concurrently`:
```bash
npm install concurrently



# Backend Setup

## Prerequisites
- **Node.js**: Ensure you have Node.js installed. [Download here](https://nodejs.org/)
- **MariaDB**: Ensure MariaDB is installed and running.

### Setting up MariaDB [Setup MariaDB](https://mariadb.org)
 #### Windows 
   use XAMPP to setup local mariadb environment.Database password not necessary for XAMPP

  ##### config.json for windows
      {
    "development": {
      "username": "smeappbi_sme",
      "password": "R{wVtCEPAaft",
      "database": "smeappbi_sme",
      "host": "localhost",
      "dialect": "mariadb"
    },
    "test": {
      "username": "smeappbi_sme",
      "password": "R{wVtCEPAaft",
      "database": "smeappbi_sme",
      "host": "localhost",
      "dialect": "mariadb"
    },
    "production": {
      "username": "smeappbi_sme",
      "password": "R{wVtCEPAaft",
      "database": "smeappbi_sme",
      "host": "localhost",
      "dialect": "mariadb"
    }
}




##### mariadb config
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sme','root','',{
    dialect : "mariadb",
    host: "localhost",
    port:3306

})

sequelize.authenticate()
    .then(() => {
        console.log("mariaDB Connected successfully")
    })
    .catch((err) => {
        console.log("Unable to connect to db",err)
    })



module.exports = sequelize;





##### config.json for Mac OS
  {
  "development": {
    "username": "root",
    "password": "dbpass@1234",
    "database": "smeappbi_sme",
    "host": "localhost",
    "dialect": "mariadb",
    "socket": "/tmp/mysql.sock"
  },
  "test": {
    "username": "root",
    "password": "dbpass@1234",
    "database": "smeappbi_sme",
    "host": "localhost",
    "dialect": "mariadb",
    "socket": "/tmp/mysql.sock"
  },
  "production": {
    "username": "root",
    "password": "dbpass@1234",
    "database": "smeappbi_sme",
    "host": "localhost",
    "dialect": "mariadb",
    "socket": "/tmp/mysql.sock"
  }
}


##### mariadb config
  const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smeappbi_sme', 'root', 'dbpass@1234', {
    dialect: "mariadb",
    host: "localhost",
    port: 3306 // Default MariaDB port
});

sequelize.authenticate()
    .then(() => {
        console.log("MariaDB Connected successfully");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });



module.exports = sequelize;




### Nodejs setup
  npm i
  npm i nodemon
  entry point app.js







    



# Frontend

->npm i

Create a .env file in the dashboardfrontendbackup directory and include the following API URL inside it:
  REACT_APP_API_URL=http://localhost:7000/

npm start
entry point App.js



// const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize('smeappbi_sme','smeappbi_sme','R{wVtCEPAaft',{
//     dialect : "mariadb",
//     host: "localhost",
//     port:3306

// })


//local configuration

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
    
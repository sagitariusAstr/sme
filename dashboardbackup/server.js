const Sequelize = require('sequelize');
const express = require('express');

const sequelize = new Sequelize('sme', 'root',  {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false // if you don't want timestamps
  }
});


const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  });

  
  const app = express();

  app.get('/users', (req, res) => {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        console.error('Error getting users', error);
        res.sendStatus(500);
      });
  });
  
  app.listen(1500, () => {
    console.log('Server started on port 3000');
  });
  
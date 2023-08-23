module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("korisnici", {
    name: {
      type:Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
  }, {
    freezeTableName: true, 
  });

  return User;
};

const db = require("../models");
const config = require("../config/auth");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.role) {
        user.setRoles(req.body.role).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      } else {
        user.setRoles('user').then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = async (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = req.body.password == user.password ? true : false;

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
        
      var token = jwt.sign({ id: user.id, name:user.name,name:user.name, email:user.email, role:user.role }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({accessToken: token});
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

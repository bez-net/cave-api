const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const nodemailer = require("nodemailer");

const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
let admissionNumber = `AD/22/JAN/`;

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    middlename: req.body.middlename,
    dob: req.body.dob,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    zip: req.body.zip,
    phoneno: req.body.phoneno,
    email: req.body.email,
    nationality: req.body.nationality,
    profession: req.body.profession,
    rel_status: req.body.rel_status,
    weddate: req.body.weddate,
    spousename: req.body.spousename,
    marriagedate: req.body.marriagedate,
    spouseagree: req.body.spouseagree,
    childname: req.body.childname,
    friendname: req.body.friendname,
    friendrel: req.body.friendrel,
    adullaminfo: req.body.adullaminfo,
    havecloserel: req.body.havecloserel,
    bornagain: req.body.bornagain,
    salvbrief: req.body.salvbrief,
    godsworkings: req.body.godsworkings,
    callofgod: req.body.callofgod,
    intoministry: req.body.intoministry,
    spiritgifts: req.body.spiritgifts,
    reason: req.body.reason,
    churchname: req.body.churchname,
    churchaddress: req.body.churchaddress,
    pastorname: req.body.pastorname,
    pastoremail: req.body.pastoremail,
    pastorphone: req.body.pastorphone,
    churchinvolve: req.body.churchinvolve,
    waterbapt: req.body.waterbapt,
    baptdate: req.body.baptdate,
    holyghostbapt: req.body.holyghostbapt,
    disability: req.body.disability,
    nervousill: req.body.nervousill,
    anorexia: req.body.anorexia,
    diabetesepilepsy: req.body.diabetesepilepsy,
    requiremedic: req.body.requiremedic,
    specialdiet: req.body.specialdiet,
    learndisability: req.body.learndisability,
    usedilldrug: req.body.usedilldrug,
    treatdrugaddic: req.body.treatdrugaddic,
    hadsurgery: req.body.hadsurgery,
    pastexpinfluence: req.body.pastexpinfluence,
    healthissuedesc: req.body.healthissuedesc,
    helpfulabilities: req.body.helpfulabilities,
    hobbies: req.body.hobbies,
    playinstrument: req.body.playinstrument,
    instrument: req.body.instrument,
    emergcontname: req.body.emergcontname,
    emergcontrel: req.body.emergcontrel,
    emergphone: req.body.emergphone,
    emergaddress: req.body.emergaddress,
    refonename: req.body.refonename,
    refoneemail: req.body.refoneemail,
    refonephone: req.body.refonephone,
    reftwoname: req.body.reftwoname,
    reftwoemail: req.body.reftwoemail,
    reftwophone: req.body.reftwophone,
    programoption: req.body.programoption,
    accomoption: req.body.accomoption,
    scholarship: req.body.scholarship,
    scholreason: req.body.scholreason,
    agree: req.body.agree,
    applicationnumber: admissionNumber,
    password: bcrypt.hashSync(req.body.firstname, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });

            //SENDING OF MAIL

            
            //END OF MAILER
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          firstname: user.firstname + " " + lastname,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.TEXT,
    },
    lastname: {
      type: Sequelize.TEXT,
    },
    middlename: {
      type: Sequelize.TEXT,
    },
    dob: {
      type: Sequelize.TEXT,
    },
    gender: {
      type: Sequelize.TEXT,
    },
    address: {
      type: Sequelize.TEXT,
    },
    city: {
      type: Sequelize.TEXT,
    },
    state: {
      type: Sequelize.TEXT,
    },
    country: {
      type: Sequelize.TEXT,
    },
    zip: {
      type: Sequelize.TEXT,
    },
    phoneno: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
    },
    nationality: {
      type: Sequelize.TEXT,
    },
    profession: {
      type: Sequelize.TEXT,
    },
    rel_status: {
      type: Sequelize.TEXT,
    },
    weddate: {
      type: Sequelize.TEXT,
    },
    spousename: {
      type: Sequelize.TEXT,
    },
    marriagedate: {
      type: Sequelize.TEXT,
    },
    spouseagree: {
      type: Sequelize.TEXT,
    },
    childname: {
      type: Sequelize.TEXT,
    },
    friendname: {
      type: Sequelize.TEXT,
    },
    friendrel: {
      type: Sequelize.TEXT,
    },
    adullaminfo: {
      type: Sequelize.TEXT,
    },
    havecloserel: {
      type: Sequelize.TEXT,
    },
    bornagain: {
      type: Sequelize.TEXT,
    },
    salvbrief: {
      type: Sequelize.TEXT,
    },
    godsworkings: {
      type: Sequelize.TEXT,
    },
    callofgod: {
      type: Sequelize.TEXT,
    },
    intoministry: {
      type: Sequelize.TEXT,
    },
    spiritgifts: {
      type: Sequelize.TEXT,
    },
    reason: {
      type: Sequelize.TEXT,
    },
    churchname: {
      type: Sequelize.TEXT,
    },
    pastorname: {
      type: Sequelize.TEXT,
    },
    pastoremail: {
      type: Sequelize.TEXT,
    },
    pastorphone: {
      type: Sequelize.TEXT,
    },
    churchinvolve: {
      type: Sequelize.TEXT,
    },
    waterbapt: {
      type: Sequelize.TEXT,
    },
    baptdate: {
      type: Sequelize.TEXT,
    },
    holyghostbapt: {
      type: Sequelize.TEXT,
    },
    disability: {
      type: Sequelize.TEXT,
    },
    nervousill: {
      type: Sequelize.TEXT,
    },
    anorexia: {
      type: Sequelize.TEXT,
    },
    diabetesepilepsy: {
      type: Sequelize.TEXT,
    },
    requiremedic: {
      type: Sequelize.TEXT,
    },
    specialdiet: {
      type: Sequelize.TEXT,
    },
    learndisability: {
      type: Sequelize.TEXT,
    },
    usedilldrug: {
      type: Sequelize.TEXT,
    },
    treatdrugaddic: {
      type: Sequelize.TEXT,
    },
    hadsurgery: {
      type: Sequelize.TEXT,
    },
    pastexpinfluence: {
      type: Sequelize.TEXT,
    },
    healthissuedesc: {
      type: Sequelize.TEXT,
    },
    helpfulabilities: {
      type: Sequelize.TEXT,
    },
    hobbies: {
      type: Sequelize.TEXT,
    },
    playinstrument: {
      type: Sequelize.TEXT,
    },
    instrument: {
      type: Sequelize.TEXT,
    },
    emergcontname: {
      type: Sequelize.TEXT,
    },
    emergcontrel: {
      type: Sequelize.TEXT,
    },
    emergphone: {
      type: Sequelize.TEXT,
    },
    emergaddress: {
      type: Sequelize.TEXT,
    },
    refonename: {
      type: Sequelize.TEXT,
    },
    refoneemail: {
      type: Sequelize.TEXT,
    },
    refonephone: {
      type: Sequelize.TEXT,
    },
    reftwoname: {
      type: Sequelize.TEXT,
    },
    reftwoemail: {
      type: Sequelize.TEXT,
    },
    reftwophone: {
      type: Sequelize.TEXT,
    },
    programoption: {
      type: Sequelize.TEXT,
    },
    accomoption: {
      type: Sequelize.TEXT,
    },
    scholarship: {
      type: Sequelize.TEXT,
    },
    scholreason: {
      type: Sequelize.TEXT,
    },
    agree: {
      type: Sequelize.TEXT,
    },
    applicationnumber: {
      type: Sequelize.TEXT,
    },
    password: {
      type: Sequelize.TEXT,
    },
  });

  return User;
};

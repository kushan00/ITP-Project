const mongoose = require('mongoose');

const RegistrationLSchema = new mongoose.Schema({
    lecFname: {
      type: String,
      required: true,
      trim:true
    },
    lecLname: {
      type: String,
      required: true,
      trim:true
    },
    nic: {
      type: String,
      required: true,
      trim:true
    },
    dob: {
      type: String,
      required: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      trim:true
    },
   cNumber: {
      type: String,
      required: true,
      trim:true
    },
    address: {
      type: String,
      required: true,
      trim:true
    },
    Rdate: {
      type: String,
      required: true,
      trim:true
    },
    uploads:{
      type: Buffer,
      require:true
   }
});

const RegistrationL = mongoose.model('LecturerRegistration', RegistrationLSchema);
module.exports = RegistrationL;
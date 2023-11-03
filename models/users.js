const { number } = require('joi')
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'Please provide a name'],
    minlength:5,
    maxlength:15,
  },
  email:{
    type:String,
    required: [true, 'Please provide email'],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'please provide a valid email'],
    unique: true,
  },
  file:{
    type:String,
    required: false,
  },
  countryKey:{
    type:Number,
    required: [true, 'Please provide country key']
  },
  mobileNumber:{
    type:Number,
    required: false,
  },
  description:{
    type:String,
    required: [true, 'Please provide a description'],
  }
})





module.exports = mongoose.model('User', userSchema)

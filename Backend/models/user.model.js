import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    fullname: {
    type: String,
    required: [true, 'Please add a name'],
    minlength: 3,
    maxlength: 50
  },
  username: {
    type: String,
    required: [true, 'Please add a username'],
    minlength: 3,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']

  },
  profilePic:{
    type: String,
    default: "no-pic.jpg"
  }


},{timestamps:true});
const User = mongoose.model('User', userSchema);
export default User;
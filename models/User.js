const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\.+/,
      //make unique and match valid email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      //   type: Schema.Types.ObjectId,
      // default: () => new Types.ObjectId(),
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    // friendCount: [friends], //prolly not right
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: {type: String, required: true},
//   email: {type: String, required: true},
//   thoughts: {type: Array},
//   friends: {type: Array}
// },{
//   toJSON: {
//     getters: true,
//   },
//   id: false,
// });

// userSchema.virtual('friendCount')
// .get(function () {
//   return this.friends.length;
// })

// const User = mongoose.model('User', userSchema);
// const handleError = (err) => console.error(err);
// const init = async () => {
//   await User.deleteMany({});

//   await User.create({
//     username: 'bigmike24',
//     email: 'bigmike24@mail.com',
//     thoughts: [1,2,3],
//     friends:[1,2,3],
//   },
//   (err) => (err
//   ? handleError(err)
//   : console.log('New user created')));
// };
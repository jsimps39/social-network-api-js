const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    // reactions: {
    //   //array of nested documents created with the reaction schema
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      //needs more
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function (){
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

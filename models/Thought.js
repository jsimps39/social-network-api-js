const { Schema, Types } = require('mongoose');

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
    },
    //reactionCount: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;

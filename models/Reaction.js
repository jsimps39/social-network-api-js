// Should this be in Thought model?
//Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const reactionSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  reactionId: { type: Number, default: () => new Types.ObjectId()},
  reactionBody: { type: String, required: true, max_length: 280},
  username: {type: String, required: true},
  // Use built in date method to get current date
  createdAt: { type: Date, default: Date.now }, //use a getter method to format the timestamp on query
},
{
    toJSON: {
      virtuals: true,
    }
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
//const Reaction = mongoose.model('MyReaction', reactionSchema);

// // Create a new instance of the model, a document
// Book.create([
//   { title: 'Hello, World', price: 5, inStock: true },
//   { title: 'Hello World 2.0', price: 10, inStock: false },
//   { title: 'Hello, World 3,0', price: 7, inStock: true },
//   { title: 'Hello World 4.0', price: 20, inStock: true },
//   { title: 'Hello, World 5.0', price: 2, inStock: false },
//   { title: 'Hello World Infinity', price: 25, inStock: false },
//   { title: 'Hello World Infinity and Beyond', price: 4, inStock: true },
// ]);

module.exports = Reaction; //or reactionSchema?
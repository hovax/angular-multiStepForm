'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionTreeSchema = new Schema({
  name: String,
  text: Array
});

module.exports = mongoose.model('QuestionTree', QuestionTreeSchema);

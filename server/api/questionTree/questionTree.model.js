'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionTreeSchema = new Schema({
  text: String
});

module.exports = mongoose.model('QuestionTree', QuestionTreeSchema);

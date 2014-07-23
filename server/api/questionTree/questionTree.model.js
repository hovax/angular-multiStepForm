'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var questionTreeSchema = new Schema({
  text: String
});

module.exports = mongoose.model('questionTree', questionTreeSchema);

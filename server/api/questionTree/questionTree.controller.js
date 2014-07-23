/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var questionTree = require('./questionTree.model');

// Get list of questionTrees
exports.index = function(req, res) {
  questionTree.find(function(err, questionTrees) {
    if (err) res.send(err);
    res.json(questionTrees);
  });
};

// Creates a new questionTree in the DB.
exports.create = function(req, res) {
  questionTree.create({
    text: req.body.text,
    }, function(err, questionTree) {
        if (err)
          res.send(err);
        questionTree.find(function(err, questionTrees) {
          if (err) res.send(err);
            res.json(questionTrees);
            });
    });
};

// Deletes a questionTree from the DB.
exports.destroy = function(req, res) {
  questionTree.remove({
                _id : req.params.questionTree_id
            }, function(err, questionTree) {
                if (err)
                    res.send(err);

                questionTree.find(function(err, questionTrees) {
                    if (err) res.send(err);
                    res.json(questionTrees);
                });
            });
};



var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Emp = require('../models/Book.js');

// get all employees
router.get('/', function(req, res, next) {
  Emp.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// get single employee by Id
router.get('/:id', function(req, res, next) {
  Emp.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// save employee appraisal
router.post('/', function(req, res, next) {
  Emp.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// update employee appraisal
router.put('/:id', function(req, res, next) {
  Emp.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// delete appraisal
router.delete('/:id', function(req, res, next) {
  Emp.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

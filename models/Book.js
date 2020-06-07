var mongoose = require('mongoose');

var AppraisalSchema = new mongoose.Schema({
  emp_id: String,
  emp_name: String,
  duration_in_comp: String,
  goal: String,
  position: String,
  relocation: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Emp', AppraisalSchema);

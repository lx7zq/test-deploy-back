const mongoose = require('mongoose');
const LineBindCodeSchema = new mongoose.Schema({
  code: String,
  lineUserId: String,
  createdAt: { type: Date, default: Date.now, expires: 600 } // หมดอายุใน 10 นาที
});
module.exports = mongoose.model('LineBindCode', LineBindCodeSchema); 
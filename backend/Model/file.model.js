const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  file_name: {
    type: String,
    required: true
  },
  file_content: {
    type: String,
    required: true
  }
}, { timestamps: true });
const File = mongoose.model('File', fileSchema);
module.exports = File;

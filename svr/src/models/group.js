const mongoose = require('mongoose')
const { Schema } = mongoose

const Group = new Schema({
  img: String,
  title: String,
  description: String,
  name: String
})

module.exports = mongoose.model('Group', Group)

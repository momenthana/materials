const mongoose = require('mongoose')
const { Schema } = mongoose

const Node = new Schema({
  img: String,
  title: String,
  description: String,
  name: String,
  group: String
})

module.exports = mongoose.model('Node', Node)

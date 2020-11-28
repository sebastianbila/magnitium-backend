const mongoose = require('mongoose')
require('dotenv').config()

// MongoDB Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

async function sync() {
  return await mongoose.connect(process.env.MONGO_URI, options)
}

const db = {
  sync,
  models: require('./models')
}

module.exports = db

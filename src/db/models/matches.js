const {
  Schema,
  model,
  Types,
  Number
} = require('mongoose')

const matchesSchema = new Schema({
  tournament: { type: String },
  team1: { type: String },
  team2: { type: String },
  map1: {
    name1: { type: String },
    winner1: { type: String }
  },
  map2: {
    name2: { type: String },
    winner2: { type: String }
  },
  map3: {
    name3: { type: String },
    winner3: { type: String }
  },
  tournament_type: { type: String },
  result: { type: String }
})

const matches = model('matches', matchesSchema)
module.exports = { matchesSchema, matches }

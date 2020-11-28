const {
  Schema,
  model,
  Types,
  Number
} = require('mongoose')

const teamsSchema = new Schema({
  name: { type: String },
  country: { type: String },
  player0: {
    nickname0: { type: String },
    playerCountry0: { type: String }
  },
  player1: {
    nickname1: { type: String },
    playerCountry1: { type: String }
  },
  player2: {
    nickname2: { type: String },
    playerCountry2: { type: String }
  },
  player3: {
    nickname3: { type: String },
    playerCountry3: { type: String }
  },
  player4: {
    nickname4: { type: String },
    playerCountry4: { type: String }
  }
})

const teams = model('teams', teamsSchema)
module.exports = { teamsSchema, teams }

const {
  Schema,
  model,
  Types,
  Number
} = require('mongoose')

const mapsSchema = new Schema({
  
    mapName: { type: String },
    imgPath: { type: String, required: true, unique: true }

})

const maps = model('maps', mapsSchema)
module.exports = { mapsSchema, maps }

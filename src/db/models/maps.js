const {
  Schema,
  model,
  Types,
  Number
} = require('mongoose')

const mapsSchema = new Schema({
  maps: [
    {
      map: {
        mapName: { type: String },
        name: { type: String },
        path: { type: String, required: true, unique: true },
        type: { type: String },
        size: { type: Number },
        user: { type: String, default: '' },
        originalName: { type: String }
      }
    } ]

})

const maps = model('maps', mapsSchema)
module.exports = { mapsSchema, maps }

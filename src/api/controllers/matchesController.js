const { HLTV } = require('hltv')
const { models } = require('../../db')

async function getAll(req, res, next) {
  try {
    const data = await HLTV.getMatches()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getAllInput(req, res, next) {
  try {
    const fromDb = await models.matches.find({ _id: '5fc2a114ad5e56320c0e02fb' })
    console.log(fromDb.player)
    res.status(200).json(fromDb)
  } catch (err) {
    next(err)
  }
}

async function getSpecificMatch(req, res, next) {
  try {
    const id = req.params.id
    const data = await HLTV.getMatch({
      id: `${id}`
    })
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function addTeams(req, res, next) {
  try {
    const addTeam = new models.teams(req.body)

    await addTeam
      .save(addTeam)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the db.'
        })
      })
    res.status(200).send()
  } catch (err) {
    next(err)
  }
}

async function addMatch(req, res, next) {
  try {
    const match = new models.matches(req.body)

    await match
      .save(match)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the db.'
        })
      })
    res.status(200).send()
  } catch (err) {
    next(err)
  }
}

async function addMaps(req, res, next) {
  try {
    const filedata = req.file
    if (!filedata) throw new Error('File must be included')

    // filedata
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getSpecificMatch,
  addMatch,
  getAllInput,
  addTeams,
  addMaps
}

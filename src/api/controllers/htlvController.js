const { HLTV } = require('hltv')

async function getMatches(req, res, next) {
  try {
    const { live } = req.query

    let data = await HLTV.getMatches()
    if (+live === 1) data = data.filter((item) => item.live === true)

    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getMatch(req, res, next) {
  try {
    const { id } = req.params

    let data = await HLTV.getMatch({ id })
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getMatches,
  getMatch
}

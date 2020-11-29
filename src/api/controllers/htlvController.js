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

async function getMatcheStats(req, res, next) {
  try {
    const data = HLTV.getMatchesStats({startDate: '2020-11-29', endDate: '2020-11-30'})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getMatchStats(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getMatchStats({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getMatchMapStats(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getMatchMapStats({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}


async function getTeam(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getTeam({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}


async function getTeamStats(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getTeamStats({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getPlayer(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getPlayer({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getPlayerByName(req, res, next) {
  try {
    const name = req.params.name
    const data = HLTV.getPlayer({name: name})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}
async function getPlayerStats(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getPlayerStats({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

async function getEvents(req, res, next) {
  try {
    const data = HLTV.getPlayerStats({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}
async function getOngoingEvents(req, res, next) {
  try {
    const data = HLTV.getOngoingEvents()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}
async function getEvent(req, res, next) {
  try {
    const id = req.params.id
    const data = HLTV.getEvent({id: id})
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getMatches,
  getMatch,
  getMatcheStats,
  getMatchStats,
  getMatchMapStats,
  getTeam,
  getTeamStats,
  getPlayer,
  getPlayerByName,
  getPlayerStats,
  getEvents,
  getOngoingEvents,
  getEvent,
}

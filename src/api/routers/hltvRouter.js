const router = require('express').Router()
const { HltvController } = require('../controllers')

router.get('/getMatch/:id', HltvController.getMatch)
router.get('/getMatches/:id', HltvController.getMatches)
router.get('/getMatcheStats', HltvController.getMatcheStats)
router.get('/getMatchStats/:id', HltvController.getMatcheStats)
router.get('/getMatchMapStats/:id', HltvController.getMatchMapStats)
router.get('/getTeam/:id', HltvController.getTeam)
router.get('/getTeamStats/:id', HltvController.getTeamStats)
router.get('/getPlayer/:id', HltvController.getPlayer)
router.get('/getPlayerByName/:name', HltvController.getPlayerByName)
router.get('/getPlayerStats/:id', HltvController.getPlayerStats)
router.get('/getOngoingEvent', HltvController.getOngoingEvents)
router.get('/getEvents/:id', HltvController.getEvents)

module.exports = router

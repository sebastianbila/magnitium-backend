const router = require('express').Router()
const { createStorage } = require('../middlewares')
const { MatchesController } = require('../controllers')

const storageMiddleware = createStorage('')

router.get('/matches', MatchesController.getAllMatches)
router.get('/maps', MatchesController.getAllMaps)
router.get('/teams', MatchesController.getAllTeams)
router.get('/matches/:id', MatchesController.getSpecificMatch)
router.post('/addMatch', MatchesController.addMatch)
router.post('/addTeams', MatchesController.addTeams)
router.post('/upload', storageMiddleware, MatchesController.addMaps)

module.exports = router

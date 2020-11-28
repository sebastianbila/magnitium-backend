const router = require('express').Router()
const { HltvController } = require('../controllers')

router.get('/matches', HltvController.getMatches)
router.get('/match/:id', HltvController.getMatch)

module.exports = router

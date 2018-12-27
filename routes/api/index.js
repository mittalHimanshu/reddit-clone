const router = require('express').Router()
const { handleApi } = require('../../handlers')

router.post('/', handleApi)

module.exports = router
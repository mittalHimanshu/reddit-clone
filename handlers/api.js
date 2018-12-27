const axios = require('axios')

module.exports = (req, res) => {
        axios.get(`https://www.reddit.com/r/${req.body.username}.json`)
            .then(response => {
                res.json(response.data)
            })
        }
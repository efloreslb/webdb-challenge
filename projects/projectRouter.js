const express = require('express');
const Projects = require('./projectDB.js');
const router = express.Router();

router.get('/', (req, res) => {
   res.send(`<h2>Projects</h2>`)
})

module.exports = router;
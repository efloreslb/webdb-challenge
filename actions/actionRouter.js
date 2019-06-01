const express = require('express');
const Actions = require('./actionDB.js');
const router = express.Router();

router.get('/', (req, res) => {
   res.send(`<h2>Actions</h2>`)
})

module.exports = router;
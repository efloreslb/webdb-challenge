const express = require('express');
const Actions = require('./actionDB.js');
const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const actions = await Actions.get();
      res.status(200).json(actions);
   } catch {
      res.status(500).json({error: "Error retrieving data"})
   }
})

router.post('/', async (req, res) => {
   try {
      const action = await Actions.post(req.body);
      res.status(201).json(action);
   } catch {
      res.status(500).json({error: "Error posting data"})
   }
})

module.exports = router;
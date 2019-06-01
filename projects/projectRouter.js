const express = require('express');
const Projects = require('./projectDB.js');
const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const projects = await Projects.get();
      res.status(200).json(projects);
   } catch {
      res.status(500).json({error: "Error retrieving data"})
   }
})

router.post('/', async (req, res) => {
   try {
      const project = await Projects.insert(req.body);
      res.status(201).json(project);
   } catch {
      res.status(500).json({error: "Error posting data"})
   }
})

module.exports = router;
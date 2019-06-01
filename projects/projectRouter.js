const express = require('express');
const Projects = require('./projectDB.js');
const router = express.Router();

router.post('/', async (req, res) => {
   try {
      const project = await Projects.insert(req.body);
      res.status(201).json(project);
   } catch {
      res.status(500).json({error: "Error posting data"})
   }
})

router.get('/', async (req, res) => {
   try {
      const projects = await Projects.get();
      res.status(200).json(projects);
   } catch {
      res.status(500).json({error: "Error retrieving data"})
   }
})

router.get('/:id', async (req, res) => {
   try {
      const project = await Projects.getById(req.params.id);
      res.status(200).json(project);
   } catch {
      res.status(500).json({error: "Error retrieving data by ID"})
   }
})

router.get('/:id/actions', async (req, res) => {
   try {
      const actions = await Projects.getProjectActions(req.params.id);
      res.status(200).json(actions);
   } catch {
      res.status(500).json({error: "Error retrieving data by ID"})
   }
})

module.exports = router;
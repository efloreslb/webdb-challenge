const express = require('express');

const projectRouter = require('./projects/projectRouter.js');
const actionRouter = require('./actions/actionRouter.js');

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
   res.send(`
      <h1>Projects and Actions Database</h1>
      <h3>Use <a href="http://localhost:6119/api/projects">/api/projects</a> to access Projects</h3>
      <h3>Use <a href="http://localhost:6119/api/actions">/api/actions</a> to access Actions</h3>
   `)
})

module.exports = server;
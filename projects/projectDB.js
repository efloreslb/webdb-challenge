const db = require('../data/dbConfig.js');

module.exports = {
   get,
   getById,
   getProjectActions,
   insert
};

function get() {
   return db('projects');
}

function getById(id) {
   return db('projects').where({ id }).first();
}

function getProjectActions(id) {
   // return db('projects').where({ id }).first()
   //    .join('projects', 'projects.id', 'actions.project_id').where('actions.project_id', 'projects.id'); //needs actions

   // return db('actions')
   //    .join('projects', 'projects.id', 'actions.project_id')
   //    .select('projects.id', 'projects.name', 'projects.description', 'projects.completed', 'actions.id')
   //    .where('actions.project_id', id)

   return db('projects').where({ id }).first().then(projects => {
      return db('actions').where({ project_id: id }).then(actions => {
         return projects.actions = actions;
      })
   })

   // return db('projects').where({ id }).first()
   //    .join('actions', 'projects.id', '=', 'actions.project_id').where('actions.project_id', 'projects.id');

   // return db('projects')
   //    .join('projects', 'projects.id', 'actions.project_id').where({ id }).first() //needs actions
}

function insert(project) {
   return db('projects').insert(project).then(ids => {
      return getById(ids[0]);
   })
}
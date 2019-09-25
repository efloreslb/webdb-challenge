const db = require('../data/dbConfig.js');

module.exports = {
   get,
   getById,
   post
}

function get() {
   return db('actions');
}

function getById(id) {
   return db('actions').where({ id }).first();
}

function post(action) {
   return db('actions').insert(action).then(ids => {
      return getById(ids[0]);
   })
}
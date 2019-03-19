const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
    (context) => {
      const sequelize = context.app.get('sequelizeClient');
      const { teams } = sequelize.models;

      context.params.sequelize = {
        include: [
          {
              model: teams,
              as: 'homeTeam'
          },
          {
              model: teams,
              as: 'awayTeam'
          }
        ]
      }

      return context
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

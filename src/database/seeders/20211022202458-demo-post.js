'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('postings',[{
      title: 'That is a lorem',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis facilisis lacus, tincidunt venenatis nibh euismod sit amet. Phasellus vel urna euismod, ornare justo at, elementum arcu. Quisque a dolor ut quam pulvinar lobortis. Ut id commodo ex',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postings', null, {})
  }
};

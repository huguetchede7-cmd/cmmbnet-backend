module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients', 'status', {
      type: Sequelize.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'active',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('clients', 'status');
  },
};
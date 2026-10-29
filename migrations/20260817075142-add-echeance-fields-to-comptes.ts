module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('comptes', 'date_echeance', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });
    await queryInterface.addColumn('comptes', 'taux_interet', {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: true,
    });
    await queryInterface.addColumn('comptes', 'montant_versement_mensuel', {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: true,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('comptes', 'date_echeance');
    await queryInterface.removeColumn('comptes', 'taux_interet');
    await queryInterface.removeColumn('comptes', 'montant_versement_mensuel');
  },
};
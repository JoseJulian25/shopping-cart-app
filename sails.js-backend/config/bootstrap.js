/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

require('dotenv').config()

module.exports.bootstrap = async function (done) {
    try {
      console.log('Inicializando la base de datos...');
      await sails.services.databaseseeder.runInitScript();
    } catch (err) {
      console.error('Error durante la inicialización de la base de datos:', err.message);
    }
  
    return done();
  };
  

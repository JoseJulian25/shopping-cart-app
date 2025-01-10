const fs = require('fs');
const path = require('path');

module.exports = {
  async runInitScript() {
    try {
      const existingCategories = await sails.getDatastore().sendNativeQuery(
        'SELECT COUNT(*) AS count FROM category;'
      );

      if (existingCategories.rows[0].count > 0) {
        console.log('Los datos ya existen en la base de datos. No se ejecutará el script init.sql.');
        return;
      }

      const scriptPath = path.resolve(__dirname, '../../init.sql');
      const sql = fs.readFileSync(scriptPath, 'utf8');

      console.log('Ejecutando script init.sql...');
      await sails.getDatastore().sendNativeQuery(sql);

      console.log('Script ejecutado correctamente.');
    } catch (err) {
      console.error('Error al ejecutar el script init.sql:', err.message);
    }
  },
};

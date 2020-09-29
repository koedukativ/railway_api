const dbConnection = require('../dbConfig');


const maintenanceController = {
    getAll: (req, res, next) => {

     dbConnection
          .query(`SELECT * FROM "trains"`)
          .then((data) => {
              console.log(JSON.stringify(data, null, 4));
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
      }
}

module.exports = maintenanceController;
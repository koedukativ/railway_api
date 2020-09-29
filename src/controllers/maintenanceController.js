const dbConnection = require('../dbConfig');


const maintenanceController = {
    getAll: (req, res, next) => {

     dbConnection
          .query(`SELECT t.id, t.name, t.company, t.length, t.current_station, t.maintenance, 
          s.name AS stationname 
          FROM "trains" t
          LEFT JOIN stations s
          ON s.id = t.current_station
          ORDER by t.name;`)
          .then((data) => {
              //console.log(JSON.stringify(data, null, 4));
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
      }
}

module.exports = maintenanceController;
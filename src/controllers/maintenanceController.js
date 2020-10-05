const dbConnection = require('../dbConfig');


const maintenanceController = {
    getAll: (req, res, next) => {

     dbConnection
          .query(`SELECT t.id, t.name, t.company, t.length, t.current_station, t.maintenance, 
          s.name AS stationname 
          FROM "trains" t
          LEFT JOIN stations s
          ON s.id = t.current_station
          ORDER by t.name, t.company;`)
          .then((data) => {
              //console.log(JSON.stringify(data, null, 4));
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
      },
      updateMaintenance: (req, res, next) => {
        const {transferData} = req.body;
        if (!transferData){
            res.status(400).send("No query data found (transferData) in request body.");
            return;
        }
        const transferObject = JSON.parse(transferData);
        if (transferObject===undefined){
            res.status(400).send("Query data (transferData) invalid.");
            return;
        }
        const inMaintenance = transferObject.inMaintenance.join();
        const offMaintenance = transferObject.offMaintenance.join();
        let sqlUpdateQuery="";

        if (inMaintenance != ""){
            console.log ("Sending trains with following ids to maintenance: ", inMaintenance);
            sqlUpdateQuery += "UPDATE trains SET maintenance=true WHERE id in (" + inMaintenance + "); ";
        }

        if (offMaintenance != ""){
            console.log ("Returning trains with following ids from maintenance: ", offMaintenance);
            sqlUpdateQuery += "UPDATE trains SET maintenance=false WHERE id in (" + offMaintenance + "); ";
        }
        console.log("update maintenance");
        dbConnection
             .query(sqlUpdateQuery)
             .then((data) => {
                 return res.status(200).send("Trains updated.");
             })
             .catch((e) => console.log(e));
         }
}

module.exports = maintenanceController;
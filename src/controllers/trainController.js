const dbConnection = require("../dbConfig");

const trainController = {
  getAll: (req, res) => {
    const queryString =
      "SELECT t.id, t.name, t.company, t.length, t.maintenance, t.current_station, s.name as stationname FROM trains t  LEFT JOIN stations s ON s.id = t.current_station ORDER BY t.id;";

    dbConnection
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
};
module.exports = trainController;

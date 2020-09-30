const dbConnection = require("../dbConfig");

const stationController = {
  getAll: (req, res) => {
    const queryString = 'SELECT * FROM "stations";';

    dbConnection
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
};

module.exports = stationController;

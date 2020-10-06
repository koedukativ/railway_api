const dbConnection = require("../dbConfig");

const trainController = {
  getAll: (req, res) => {
    const queryString = 'SELECT * FROM "trains";';


    dbConnection
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
};
module.exports = trainController;

};




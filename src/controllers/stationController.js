const dbConnection = require('../dbConfig');

const UserController = {

getTrainsByStation: (req, res, next) => {
    const sql = `
    SELECT *
    FROM trains 
    LEFT JOIN stations 
    ON stations.id = trains.current_station;`

    dbConnection.query(sql)
    .then((data) => 
    {return res.json(data.rows)})
    .catch(err => console.log(err) )  

}

    
}

module.exports = UserController;
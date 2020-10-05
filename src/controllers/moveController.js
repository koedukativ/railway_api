const dbConnection = require('../dbConfig');

const UserController = {
    // Get all trains and their current station
    getAllTrains: (req, res, next) => {
        dbConnection
            .query(`SELECT trains.name AS train, trains.id AS train_id, trains.company AS company, stations.id AS station_id, stations.name AS station
                    FROM "trains" LEFT JOIN "stations" ON stations.id = trains.current_station
                    ORDER BY train_id`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },

    getAllStations: (req, res, next) => {
        dbConnection
            .query(`SELECT id, name 
                    FROM "stations" 
                    ORDER BY name`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },

    getTrain: (req, res, next) => {
        const { id } = req.params;
        dbConnection
            .query(`SELECT * FROM "trains" WHERE  id = ${id}`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },

    // Move a Train to a Station params: 'station'
    moveTrain: (req, res, next) => {
        // Getting the parameters from the params
        const trains = req.query.trains.split(',');
        const stations = req.query.stations.split(',');
        // Building a SQL request via loop
        let sqlBuild = '';
         for (let i = 0; i < trains.length; i++) {
            sqlBuild += `UPDATE "trains" SET current_station=${stations[i]} WHERE id=${trains[i]}; `;
        }
        dbConnection
            .query(sqlBuild)
            .then((data) => res.json(data.rows))
            .catch((e) => {
                res.status(500).send();
                console.log(e)}
                );
    }  
};

module.exports = UserController;
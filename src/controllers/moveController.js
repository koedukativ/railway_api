const dbConnection = require('../dbConfig');

const UserController = {
    // Get all trains and their current station
    getAllTrains: (req, res, next) => {
        dbConnection
            .query(`SELECT trains.name AS train, trains.id AS train_id, stations.id AS station_id, stations.name AS station
                    FROM "trains" LEFT JOIN "stations" ON stations.id = trains.current_station
                    ORDER BY trains.name`)
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
        const { id } = req.params;
        const { station } = req.query;
        dbConnection
            .query(`UPDATE "trains" SET current_station = '${station}' WHERE id = ${id} RETURNING *`)
            .then((data) => res.json(data.rows))
            .catch((e) => {
                res.status(500).send();
                console.log(e)}
                );
    }
};

module.exports = UserController;
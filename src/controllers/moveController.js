const dbConnection = require('../dbConfig');

const UserController = {
    // Get all trains and their current station
    getAll: (req, res, next) => {
        dbConnection
            .query(`SELECT trains.name AS train, stations.name AS station
                    FROM "trains" LEFT JOIN "stations" ON stations.id = trains.current_station
                    ORDER BY trains.name`)
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
    // Additional error checking: 
    // 1. Train does not exist or NaN
    // 2. Station does not exist or NaN
    
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
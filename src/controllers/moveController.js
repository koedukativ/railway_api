const dbConnection = require('../dbConfig');

const UserController = {
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
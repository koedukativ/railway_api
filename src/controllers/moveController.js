const dbConnection = require('../dbConfig');

const UserController = {
    moveTrain: (req, res, next) => {
        const { id } = req.params;
        dbConnection
            .query(`SELECT * FROM "trains" WHERE  id = ${id}`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    }
};

module.exports = UserController;
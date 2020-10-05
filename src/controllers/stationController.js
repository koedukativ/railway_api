const dbConnection = require('../dbConfig');

const UserController = {

getTrainsByStation: (req, res, next) => {
    const sql = `
    SELECT s.id, s.country||' > '||s.city||' > '||s.name||' ('||count(t.id)||')' as dropdownlabel
    FROM stations s
    LEFT JOIN trains t
    ON t.current_station=s.id
    GROUP BY s.id
    ORDER by s.country, s.city, s.name;`
    

    dbConnection.query(sql)
    .then((data) => 
    {return res.json(data.rows)})
    .catch(err => console.log(err) )  

},
selectStation:(req, res, next) => {
    const { id } = req.params;
    const trainSql = `

    SELECT * FROM "trains" WHERE current_station=${id};`;
    dbConnection.query(trainSql)
    .then((data) => 
    {return res.json(data.rows)})
    .catch(err => console.log(err) )  
},
getAllTrains: (req, res, next) => {
    const sql = `
    SELECT * from trains;`
    

    dbConnection.query(sql)
    .then((data) => 
    {return res.json(data.rows)})
    .catch(err => console.log(err) )  

},

    
}

module.exports = UserController;
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Karla')`
connection.query(sql)

app.get('/', (_req, res) => {
    const selectPeopleSql = `SELECT * from people`
    connection.query(selectPeopleSql, (err, response) => {
        if(!err) {
            const parsedData = JSON.parse(JSON.stringify(response))
            const nameList = parsedData?.map(field => {
                return (`<li>${field?.name}</li>`)
            })
            res.send(`<h1>Full Cycle Rocks!</h1><ul>${nameList.join('')}</ul>`)
        }
    })
    connection.end() 
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const prices = require('/Users/huangzhangjie/WebstormProjects/GasPrice/public/price.js')


db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

router.get('/', function(req, res, next) {
    sql= "SELECT * FROM quote ORDER BY date";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

router.post('/', (req, res) => {
    const {date, oil_98, oil_95, oil_92, oil_high}=req.body;
    let sql = "INSERT or REPLACE INTO quote (date, oil_98, oil_95, oil_92, oil_high) VALUES (?, ?, ?, ?, ?)";
    db.run(sql, [date, oil_98, oil_95, oil_92, oil_high], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        console.log('inserted');
    });
    //res.redirect('/data.html');
    return res.status(200).send('inserted');
})

async function main(){
    const jsonData = await prices.getPrice;

    for (let i = 0; i < jsonData.length; i++) {
        const {date, oil_98, oil_95, oil_92, oil_high}=jsonData[i];
        let sql = "INSERT INTO quote (date, oil_98, oil_95, oil_92, oil_high) VALUES (?, ?, ?, ?, ?)";
        db.run(sql, [date, oil_98, oil_95, oil_92, oil_high], (err) => {

        });
    }
    //console.log(data);
}

main().catch((error) => {
    console.error(error);
});

module.exports = router;

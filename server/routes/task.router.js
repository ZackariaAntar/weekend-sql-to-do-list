const express = require("express");
const router = express.Router();

const pool = require("../modules/pool");

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "weekend-to-do-app" ORDER BY "id";`
    pool.query(queryText).then((result)=>{
        res.send(result.rows)
    }).catch((error) =>{
        console.log('Opps', error);
        res.sendStatus(500)
    })

})

router.get('/:id', (req, res) => {
    let idToGet = req.params.id;
    let queryText = `SELECT * FROM "weekend-to-do-app" WHERE "id" = $1`;
    pool.query(queryText, [idToGet]).then((result)=>{
        console.log('got ids');
        res.send(result.rows);
    })

})




router.post('/', (req, res) => {
    let taskObj = req.body;
    let queryText = `INSERT INTO "weekend-to-do-app" ("task_body")
                   VALUES ($1);
                   `;
    pool.query(queryText, [taskObj]).then((result)=>{
        res.sendStatus(201)

    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})





router.delete('/:id', (req, res) => {
    let idToGet = req.params.id;
	let queryText = `DELETE FROM "weekend-to-do-app" WHERE "id" = $1`;
    pool.query(queryText, [idToGet]).then((result)=>{
        res.sendStatus(200)
    }).catch((error) =>{
        console.log(error);
        res.sendStatus(500)
    })


})
router.put('/:id', (req, res) => {
    let idToGet = req.params.id;
	let queryText = `UPDATE "weekend-to-do-app" SET "status" = TRUE WHERE "id" = $1`;
    pool.query(queryText, [idToGet])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});



})


module.exports = router;
const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers', (req, res) => {
    burger.insertOne([
        'burger_name'
    ],
        [
            req.body.burger_name
        ], data => {
            res.redirect('/');
        });
});

router.put('/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.updateOne({
        devoured: true
    },
        condition, data => {
            res.redirect('/');
        });
});

// Export routes for server.js to use.
module.exports = router;

const express = require('express');
const router = express.Router()

const indexRouter = router.get('/', (req, res) => {
    res.render('index');
});

module.exports = indexRouter;

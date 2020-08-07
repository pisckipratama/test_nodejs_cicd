const router = require('express').Router();
const { getAllData } = require('../controllers/index_controllers');

router.get('/', getAllData);

module.exports = router;

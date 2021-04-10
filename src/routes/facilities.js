const { Router } = require('express');
//const { check } = require('express-validator');

const { validateHeader, validateCollection } = require('../middlewares/facilities');
const { getFacilities, getFacility } = require('../controllers/facilities');
//const { validateCollection } = require('../helpers/validateCollection');

const router = Router();

router.get( '/', [
    validateHeader,
    validateCollection
], getFacilities
);

router.get( '/:id', [
    validateHeader,
    validateCollection
], getFacility
);

module.exports = router;

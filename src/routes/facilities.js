const { Router } = require('express');
//const { check } = require('express-validator');

const { validateHeader, validateCollection } = require('../middlewares/facilities');
const { getFacilities } = require('../controllers/facilities');
//const { validateCollection } = require('../helpers/validateCollection');

const router = Router();

router.get( '/:id', [
    //check('country').custom( validateCollection ), 
    validateHeader,
    validateCollection
], getFacilities
);

module.exports = router;

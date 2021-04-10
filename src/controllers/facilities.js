'use strict';
const { response, request } = require('express');

const getFacilities = async (req = request, res = response) => {

    res.json({
        country: req.country,
        id: req.params.id,
        msg: 'Hola Api Facilities NodeJs'
    })

}

module.exports = {
    getFacilities
}
'use strict';

const { response, request } = require('express');

const validateHeader = (req = request, res = response, next) => {

    const country  = req.headers['x-country'];
    
    if ( !country ) {
        
        return res.status(400).json({
            msg: 'x-country not funded - header'
        });
    }
  
    req.country = country.toLowerCase();

    next();

}

const validateCollection = (req = request, res = response, next ) => {

    const countries = ['cl', 'ar', 'co', 'pe']; // Validar luego y obtener desde Firestore.

    if ( !countries.includes( req.country ) ) {
        return res.status(400).json({
            msg: 'x-country not found - collection'
        });
    }

    next();
}

const validateId = (req = request, res = response, next ) => {

    const { id } = req.params;

    if ( !id ) {
        return res.status(400).json({
            msg: 'id not found'
        });
    }

    next();
}

module.exports = {
    validateHeader,
    validateCollection,
    validateId
}
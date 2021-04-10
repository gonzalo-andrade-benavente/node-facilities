'use strict';

const { response, request } = require('express');
const conn = require('../database/config');

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

const validateCollection = async (req = request, res = response, next ) => {

    const db = conn.getDB();

    const collectionRef = db.collection(req.country);

    const snapshot = await collectionRef.get();

    if ( snapshot.empty ) {
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
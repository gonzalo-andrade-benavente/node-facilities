'use strict';
const { response, request } = require('express');
const conn = require('../database/config');
const db = conn.getDB();

const getFacility = async (req = request, res = response) => {

    res.json({
        country: req.country,
        id: req.params.id,
        msg: 'Hola Api Facilities NodeJs'
    })

}

const getFacilities = async (req = request, res = response) => {

    const collection = db.collection(req.country).doc(process.env.COLLECTION).collection(process.env.SUBCOLLECTION);
    const facilitiesRef = await collection.get();
    let facilities = [];

    facilitiesRef.forEach( (doc) => {
        let data = doc.data();
        let facility = data.facilities;
        facilities.push( facility );
    });

    res.json({
        total: facilitiesRef.size,
        facilites: facilities
    })

}

module.exports = {
    getFacilities,
    getFacility
}
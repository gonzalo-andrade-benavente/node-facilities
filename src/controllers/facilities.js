'use strict';
const { response, request } = require('express');

const conn = require('../database/config');
const db = conn.getDB();


const getFacility = async (req = request, res = response) => {

    const collection = db.collection(req.country).doc(process.env.COLLECTION).collection(process.env.SUBCOLLECTION);
    const id = req.params.id;

    const facilityRef = await collection.where('facilities.id', '==', Number(id) ).get();
    
    let facility, data;

    facilityRef.forEach( (doc) => {
        data =  doc.data();
        facility = data.facilities;
    });


    if ( facility === undefined ) {
        return res.status(400).json({
            msg: 'facility not funded - controller'
        });
    }

    res.json(
        facility
    );

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
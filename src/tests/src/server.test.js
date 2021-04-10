require('dotenv').config();
const request = require('supertest');
require('jest');

const Server = require('../../models/server');
const server = new Server();

describe( 'Test server.test.js', () => {

    test( 'Should be response error not x-country.', async () => {
        await request(server.app)
            .get('/app/facilities')
            .expect(400)
    });

    test( 'Should be response a 200 and two facilities.', async () => { // ( done )
        await request(server.app)
            .get('/app/facilities')
            .set('x-country', 'cl')
            .expect(200)
            .then( (res) => {
                expect( res.body.total ).toBeGreaterThan( 0 )
            });
            /*
            .then( res => {
                console.log( res.body.total )
                done();
            })
            .catch( err => done( err ) )
            */
    });

    test( 'Should be response error because past a not facility.', async () => {
        await request(server.app)
            .get('/app/facilities/nodebefuncionar')
            .set('x-country', 'cl')
            .expect(400)
    });

    test( 'Should be response a local 2000 whit id and correctly name.', async () => {
        await request(server.app)
            .get('/app/facilities/2000')
            .set('x-country', 'cl')
            .expect(200)
            .then( (res) => {
                expect( res.body ).toStrictEqual(
                    { 
                        "id": 2000, 
                        "name": "(VENTA A DIST.)  FALABELLA RETAIL S.A."
                    }
                )
            });
    });


})
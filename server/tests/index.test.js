const app = require('../src/app');
const database = require('../src/database');
const supertest = require('supertest');

describe('Tests', () => {

    beforeAll(async () => {
        // INIT
        await database.authenticate();
        await database.sync({ force: true });
    });

    it('Example should work', async () => {
        const helloWorld = await supertest(app).get('/');

        expect(helloWorld.statusCode).toBe(200);
        expect(helloWorld.text).toBe('Hello world');
    });

    afterAll(async () => {
        // CLEANUP
        await database.close();
    });

});
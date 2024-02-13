const app = require('../src/app');
const database = require('../src/database');

describe('Tests', () => {

    beforeAll(async () => {
        // INIT
        await database.authentificate();
        await database.sync({ force: true });
    });



    afterAll(async () => {
        // CLEANUP
        await database.close();
    });

});
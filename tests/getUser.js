const assert = require('assert');

describe('User Management - Get list Of Users', function () {
    const page = 2; // ganti ini untuk tes halaman lain

    it(`should return a paginated list of users for page ${page}`, async function () {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();

        // Assertion 
        assert.strictEqual(response.status, 200, 'Expected status code 200');
        assert.strictEqual(data.page, page, `Expected to be on page ${page}`);
        assert.ok(Array.isArray(data.data), 'Expected data to be an array');
        assert.ok(data.data.length > 0, 'Expected at least one user in the list');
    })
})
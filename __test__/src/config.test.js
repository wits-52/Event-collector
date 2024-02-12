const config = require('../../src/config');

test('config must have following required properties', () => {
    const availablePropsOnConfig = Object.getOwnPropertyNames(config);

    for (const prop of [ 'PORT', 'DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DBNAME','DB_PORT' ]) {
        expect(availablePropsOnConfig.includes(prop)).toBe(true);
    }
});
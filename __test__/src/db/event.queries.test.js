const queries = require('../../../src/db/event.queries');

test('queries must have all required queries', () => {
    expect(typeof queries.getAllEvent).toBe('string');
    expect(typeof queries.createTable).toBe('string');
    expect(typeof queries.postEventsList).toBe('function');
    expect(typeof queries.postEventsList([])).toBe('string');
});
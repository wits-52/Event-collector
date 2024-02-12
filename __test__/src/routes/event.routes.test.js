const eventRoutes = require('../../../src/routes/event.routes');

describe('/event router should have required route handler', () => {
    test('should have get route handler', () => {
        expect(eventRoutes.get).toBeDefined();
        expect(typeof eventRoutes.get).toBe('function');
    });
    test('should have post route handler', () => {
        expect(eventRoutes.post).toBeDefined();
        expect(typeof eventRoutes.post).toBe('function');
    });
});
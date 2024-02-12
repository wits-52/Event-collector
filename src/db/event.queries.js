module.exports = {
    getAllEvent: 'SELECT type, item, timeStamp FROM Events;',
    postEventsList: (events) => {
        let query = 'INSERT INTO Events(type, item, timeStamp) Values';

        query += events.map(event => `('${event.type}', ${event.item ? `'${event.item}'`: null}, '${event.timestamp || new Date().toISOString()})')`).join(',');

        return query;
    },
    createTable: `CREATE TABLE IF NOT EXISTS Events (
        id SERIAL PRIMARY KEY,
        type varchar(30) NOT NULL,
        item varchar(30),
        timeStamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );`
};
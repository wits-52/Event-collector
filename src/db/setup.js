const { pool } = require('./db');
const { createTable } = require('./event.queries');

(async() => {
    for (let i = 0; i < 3; i++) {
        try {
            await pool.query(createTable);
            console.log('TABLE CREATED');
            break;
        } catch (err) {
            console.log(`TRY #${i}: `,err);
        }
    }
}
)();
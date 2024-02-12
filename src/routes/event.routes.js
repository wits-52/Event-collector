const express = require('express');
const { pool } = require('../db/db');
const { getAllEvent, postEventsList } = require('../db/event.queries');

const eventRoutes = express.Router();

eventRoutes.get('/', async(req, res) => {
    try {
        const result = await pool.query(getAllEvent);
        return res.status(200).json({
            events: result.rows,
            message: `${result.rows.length} ROWS read.`
        });
    } catch (err) {
        res.status(500).json({
            error: 'Internal Server Error!!',
            message: err.message
        });
    }
});

eventRoutes.post('/', async(req, res) => {
    let { events } = req.body;
    
    if (!events || !Array.isArray(events) || !events.length) {
        return res.status(400).json({
            error: 'Invalid payload.',
            message: 'events property in payload should be an array with a minimum length of 1.'
        });
    }
    const invalidEvents = [];

    invalidEvents.push(...events.filter(event => !event.type).map(event => {
        return {
            ...event,
            error: 'type is a mandatory field on event.'
        }
    }));
    events = events.filter(event => event.type);
    // if (events.find(event => !event.type)) {
    //     return res.status(400).json({
    //         error: 'Invalid payload.',
    //         message: 'type is a mandatory field on event.'
    //     });
    // }
    invalidEvents.push(...events.filter(event => event.timestamp !== undefined)
                                .filter(event => typeof event.timestamp !== 'string' || isNaN(new Date(event.timestamp)))
                                .map(event => {
                                    return {
                                        ...event,
                                        error: 'timestamp should a valid date string when provided.'
                                    }
                                }));
    events = events.filter(event => event.timestamp === undefined || (typeof event.timestamp === 'string' && !isNaN(new Date(event.timestamp))));
    // if () {
    //     return res.status(400).json({
    //         error: 'Invalid payload.',
    //         message: 'timestamp should a valid date string when provided.'
    //     });
    // }
    if (!events.length) {
        return res.status(400).json({
            error: 'Invalid payload.',
            message: '0 valid events found.'
        });
    }
    try {
        const result = await pool.query(postEventsList(events));
        return res.status(201).json({
            events,
            invalidEvents,
            message: `${result.rowCount} Rows inserted.`
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Internal Server Error!!',
            message: err.message
        });
    }
});

module.exports = eventRoutes;
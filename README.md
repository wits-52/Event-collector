# Event-collector
Node.js micro service for storing event data

DB SCHEMA:
    {
        id: identity column also primary key

        type: mandatory string, all events needs to have a type. click, keyPress, eat, sleep

        item: nullable string as some events can have self explanatory type which dont need item. e.g. 'sleep' if I am storing my daily events then sleep is self explanatory than myself is sleeping. item can still be entered though. I am keeping it optional.
        
        timestamp: time at which this event occured. It should always have a value. I am keeping a default as current-timestamp for it in case if it is not provided.

    }

ASSUMPTIONS:
1. post /event : accepts list of events as json in payload
2. I am assuming that when multiple events are sent in payload then I will insert valid events in DB as per schema. In case invalid events are there they we not be inserted. `This can be changed as per business requirements`
3. post /event: It will return 
    {
    "events": [
        {
            ...
        }
    ],
    "invalidEvents": [
        {
            ...
            "error"
        }
    ],
    "message": "N Rows inserted."
    }
4. get /event - read all events from DB
    {
        events: []
        "message": "N ROWS read."
    }
5. All Error response will have following structure:
    {
        "error"
        "message"
    }

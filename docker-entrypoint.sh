#!/bin/sh
echo 'Creating Tables...'

node ./src/db/setup.js

echo 'Starting API...'

node index.js
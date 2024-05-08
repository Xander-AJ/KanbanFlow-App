// dbHandler.js
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'src', 'db.json');

const readDB = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading db.json:', err);
        return {};
    }
};

const writeDB = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error writing to db.json:', err);
    }
};

module.exports = { readDB, writeDB };
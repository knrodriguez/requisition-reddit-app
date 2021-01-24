const { db } = require('./server/db');
const app = require('./server');
const PORT = 8080;

db.sync().then(() => {
    console.log('DB is connected and synced');
    app.listen(PORT, () => console.log(`continuously connected on port ${PORT}`))
})
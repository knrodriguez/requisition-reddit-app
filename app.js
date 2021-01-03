const { db } = require('./server/db');
const app = require('./server');
const cron = require('node-cron');
const PORT = 3000;

db.sync().then(() => {
    console.log('DB is connected and synced');
    // cron.schedule('* * * * *', function() {
    //     console.log('running a task every minute');
    // })
    app.listen(PORT, () => console.log(`continuously connected on port ${PORT}`))
})
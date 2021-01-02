const { db } = require('./server/db');
const app = require('./server');
const PORT = 3000;

db.sync({force:true}).then(() => {
    console.log('DB is connected and synced');
    app.listen(PORT, () => console.log(`continuously connected on port ${PORT}`))
})
## App.js
Connects the database and the app to a port.

## Server Side Setup
Index.js - exports **app**  
Contains: 
- Express middleware
- Routers to our API routes

### Database
Index.js - exports **db and models**  
Contains:
- **Models**
- Associations of Models
- Database connection to PostgreSQL

#### Models
Contains model files using db and Sequelize

### API Routes
Index.js - exports **main router w/ error handling**  
Contains:
- route files
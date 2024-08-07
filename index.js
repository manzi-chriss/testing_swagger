const express = require('express');
const {connectDB}= require('./model/DBconnection');
const cors= require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Swagger.json');

const port=3000;

// Connect to MongoDB

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

const bookRoutes= require('./controller/routes/Book');



app.use('/api/books',bookRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})



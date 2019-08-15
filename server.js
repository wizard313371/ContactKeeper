const express = require('express');
const connectDB = require('./config/db');

//Connect Database
connectDB();

const app = express();

//Init Middleware
app.use(express.json({ extend:false }));


const PORT = process.env.PORT || 5000;

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
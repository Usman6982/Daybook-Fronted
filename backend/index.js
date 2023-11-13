const connectToMongo = require ('./db');
const express = require('express')
const app = express()
//Your backend application is running on http://localhost:5000
const port =5000
app.use(express.json())
//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
  console.log(`Daybook backend listening on port ${port}`)
})

connectToMongo();
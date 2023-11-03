require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect')
const noAuthRoutes = require('./routes/no-auth')
const express = require('express');
const app = express();

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

app.set('trust proxy', 1);
app.use(express.json());
app.use(helmet())
app.use(xss())
app.use(cors(['http://127.0.0.1:5500']))
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, //limit each ip to 100 requests per windowMs
}))


app.use('/api/v1', noAuthRoutes)

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(console.log('connction successful'))
    app.listen(port, () =>{
      console.log(`Server is listening on port ${port}...`)
    }
    );
  } catch (error) {
    console.log(error);
  }
};

start();
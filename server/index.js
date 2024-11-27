const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config.json');
const port = process.env.PORT || config.port;

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

app.get('/', (req, res) => {
  res.send({status: 200, result: {"name": "Done...Ashishgfgfff.", "class": "medium"}});
});

app.use('/api/users', require('./router/api'));

app.listen(port,()=>{
    console.log(`application is running at ${port} port`);
});
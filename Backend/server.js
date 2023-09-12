require('dotenv').config()
var cors = require('cors')
const express = require('express')
const path= require('path')
// const mongoose = require('mongoose')

const userRoutes = require('./routes/user');
const accountRoutes = require('./routes/accounts');
const opportunityRoutes = require('./routes/opportunity');
const companyRoutes = require('./routes/company');
const configRoutes = require('./routes/config');
const doctypRoutes = require('./routes/doctype');
const templateRoutes = require('./routes/template');
const peopleRoutes = require('./routes/admin');
const contentRoutes = require('./routes/content');
const guidedSellingRoutes = require('./routes/guidedSelling');

const securityRoutes = require('./routes/security');
const roleRoutes = require('./routes/roleSetup');
const lookupsRoutes = require('./routes/lookups');
const lookups_dataRoutes = require('./routes/lookups_data');
const surveyRoutes = require ('./routes/survey');
const spreadsheetRoutes = require('./routes/spreadsheet');
const supportRequest = require('./routes/help');



// express app
const app = express()
app.use(cors())

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// database 
const db = require("./models");

db.sequelize.sync();

// routes
app.use('/api/user', userRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/opportunity', opportunityRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/config', configRoutes);
app.use('/api/doctype', doctypRoutes);
app.use('/api/template', templateRoutes);
app.use('/api/admin', peopleRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/security', securityRoutes);
app.use('/api/guidedselling', guidedSellingRoutes);

app.use('/api/rolesSetup', roleRoutes);
app.use('/api/lookups', lookupsRoutes);
app.use('/api/lookups_data', lookups_dataRoutes);
app.use('/api/survey', surveyRoutes);
app.use('/api/spread', spreadsheetRoutes);
app.use('/api/help', supportRequest);


app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.listen(process.env.PORT, () => {
  console.log('connected to db & listening on port', process.env.PORT)
})



// var con = mysql.createConnection({
//   host:process.env.HOST,
//   user:process.env.USER,
//   password:process.env.PASSWORD,
//   port:process.env.PORT_MYSQL,
//   database:process.env.DATABASE,
// })
// // connect to db
// con.connect(function(err){
//   if(err){ throw err; }


  


// })
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log('connected to db & listening on port', process.env.PORT)
//     })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
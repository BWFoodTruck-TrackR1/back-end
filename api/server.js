const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Authenticated Middleware
const Restricted = require('../auth/auth-Middleware')

// Authenticated Routes 
const operatorAuth = require('../auth/operator-AuthRouter.js')
const dinerAuth = require('../auth/diner-AuthRoute')


// ROUTES SOURCE
const operatorRoute = require('./routers/operator/operator-Route');
const dinerRouter =  require('./routers/diner/diner-Route');
const truckRouter = require('./routers/trucks/trucks-Route')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Authenticated Login for Operators and Client(Diners)
server.use('/auth/operator', operatorAuth);
server.use('/auth/diner', dinerAuth);

// ROUTES for Admin
server.use('/operators', Restricted, operatorRoute);
server.use('/diners', Restricted, dinerRouter);
server.use('/trucks', truckRouter)

server.get('/', async (req, res) => {
    res.json({ api: 'running...' })
})



module.exports = server;


const { getEncuesta } = require('./controllers/encuesta');
const Server = require('./models/server')

// require('./promedio');

require('dotenv').config();

const server = new Server()

server.listen()






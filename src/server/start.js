const app = require('./server.js');

//setting port for heroku
const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
    console.log('listening on port 5001');
})
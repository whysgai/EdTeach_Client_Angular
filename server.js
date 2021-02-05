//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/cs5610-fa20-cohenw-client-angular'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join('index.html', {root: 'dist/cs5610-fa20-cohenw-client-angular'}));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
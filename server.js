const express = require("express");
const app = express();


// Set the port
const PORT = process.env.PORT || 8888
const HOST = '0.0.0.0'


// Set the view engine

// Set the static files location



// Set the routes


// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

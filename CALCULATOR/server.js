const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Serve files from the current directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

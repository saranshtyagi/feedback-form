const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email, feedback } = req.body;
    console.log(`Feedback received: ${name}, ${email}, ${feedback}`);
    res.send('Thank you for your feedback!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

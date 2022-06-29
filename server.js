const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api2/items', (req, res) => {
    return res.json({
        result: [
            {
                title: 'item 1'
            },
            {
                title: 'item 2'
            },
            {
                title: 'item 3'
            },
        ]
    })
});

app.post('/api2/login', (req, res) => {
    console.log('req.body', req.body)
    return res.json({
        response: 'I should be returned as a response',
        data: req.body
    })
});

app.listen(9090, () => console.log('server is running....'))
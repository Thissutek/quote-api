const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.get('/api/quotes/random', (req, res) => {
    res.send({
        quote: getRandomElement(quotes)
    });
});

app.get('/api/quotes', (req, res, next) => {
    if(req.query.person !== undefined) {
        const quoteByPerson = quotes.filter(quote => quote.person === req.query.person);
        res.send({
            quote: quoteByPerson
        });
    } else {
        res.send({
            quote: quotes
        });
    }
});

app.post('/api/quotes', (req, res, next) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person
    };
    if(newQuote.quote && newQuote.person) {
        quotes.push(newQuote);
        res.send({
            quote: newQuote
        });
    } else {
        res.status(400).send('enter valid response')
    }
})

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
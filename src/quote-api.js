const fetch = require('node-fetch')

const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes')
    const quotes = await res.json()

    const quoteNumber =  Math.floor( Math.random() * (quotes.length - 1))

    return quotes[quoteNumber].text
}

exports = module.exports = {
    getQuote
}
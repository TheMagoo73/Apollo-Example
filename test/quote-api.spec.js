const rewire = require('rewire')

const quoteApi = rewire('../src/quote-api')

const chai = require('chai')
chai.should()

const fetchMock = require('fetch-mock')

describe('Quote API wrapper', () => {

    before(() => {
        const myMock = fetchMock.sandbox().mock(
            'https://type.fit/api/quotes',
            [
                { author: "A Test", text: "Foo is better than Bar" }
            ]
            , 
            {
                delay: 250,
                sendAsJson: true,
                fallbackToNetwork: false
            }
        )
        quoteApi.__set__('fetch', myMock)
    })

    after(() => {
        fetchMock.reset()
    })

    it("Can get a random quote", async () => {
        const quote = await quoteApi.getQuote()
        quote.should.deep.equal("Foo is better than Bar")
    })

})
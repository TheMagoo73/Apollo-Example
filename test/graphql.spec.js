const chai = require('chai')
chai.should()

const { makeExecutableSchema } = require('graphql-tools')
const { graphql } = require('graphql')

const mockQuoteService = () => {
    return "Foo is never a substitute for Bar"
}

const mockLogger = {
    log: (msg) => {return}
}

describe("GraphQL", () =>{

    let schema
    let context = {}

    before(() => {
        const typeDefs = require('../src/typedefs')
        const resolvers = require('../src/resolvers')
        schema = makeExecutableSchema({ typeDefs, resolvers })
        context.logger = mockLogger
        context.getQuote = mockQuoteService
    })

    it('can return a quote', async () => {
        const query = `
            query {
                quote
            }
        `

        const expected = {
            data: {
                quote: "Foo is never a substitute for Bar"
            }
        }

        const result = await graphql(schema, query, null, context, {})
        result.should.deep.equals(expected)
    })

})
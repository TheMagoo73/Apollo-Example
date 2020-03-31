const express = require ('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./src/typedefs')
const resolvers = require('./src/resolvers')
const quoteApi = require('./src/quote-api')

const logger = {
    log: msg => console.log(msg)
}

const server = new ApolloServer({typeDefs, resolvers, context: { getQuote: quoteApi.getQuote, logger }})

const app = express()

server.applyMiddleware( {app} )

app.listen({port: 5000}, () => {
    console.log('Server is running')
})
const { gql } = require('apollo-server-express')

exports = module.exports = typeDefs = gql`

    type Query {
        quote: String
    }
`

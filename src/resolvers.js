exports = module.exports = resolvers = {
    Query: {
        quote: (root, args, context) => {
            const logger = context.logger
            logger.log("info: Getting a quote")
            
            return context.getQuote()
        }
    }
}

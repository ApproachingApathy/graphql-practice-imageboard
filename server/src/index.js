const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

function buildSchema() {
    return importSchema("src/graphql/db.graphql")
}

buildSchema()
.then(typeDefs => {
    const server = new ApolloServer({typeDefs})
    server.listen({port:4000})
        .then(({ url }) => {
            console.log(`Server started at ${url}`)
        })
})
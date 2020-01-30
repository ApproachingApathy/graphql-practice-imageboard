const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const { prisma } = require("./prisma/generated/prisma-client/index");

const resolvers = require("./resolvers/resolver");

function buildSchema() {
	return new Promise((resolve, reject) => {
		// Define each async import schema call.
		const schemas = {
			// db: importSchema("src/graphql/db.graphql"),
			app: importSchema("src/graphql/app.graphql")
		};

		let finalSchema = "";
		const keys = Object.keys(schemas);

		// Place each import schema promise into an array.
		const schemaPromises = keys.map(key => schemas[key]);
		Promise.all(schemaPromises).then(schemaStrings => {
			// Add each schema string to the final schema.
			schemaStrings.forEach(schema => {
				finalSchema += "\n" + schema;
			});
			// console.log(finalSchema);
			resolve(finalSchema);
		});
	});
}

buildSchema().then(typeDefs => {
	// console.log(typeDefs)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		tracing: true
		// dataSources: () => prisma
	});
	server.listen({ port: 4000 }).then(({ url }) => {
		console.log(`Server started at ${url}`);
	});
});

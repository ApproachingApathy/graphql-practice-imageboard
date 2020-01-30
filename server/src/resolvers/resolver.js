const userResolvers = require("./user/resolvers");
const albumResolvers = require("./album/resolvers");
const imageResolvers = require("./image/resolvers");
const query = {
	...userResolvers.Query,
	...imageResolvers.Query,
	...albumResolvers.Query
};

const mutation = {
	...userResolvers.Mutation,
	...imageResolvers.Mutation,
	...albumResolvers.Mutation
};

module.exports = {
	Query: query,
	User: userResolvers.User,
	Album: albumResolvers.Album,
	Mutation: mutation
};

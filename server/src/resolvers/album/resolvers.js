const { prisma } = require("../../prisma/generated/prisma-client");
module.exports = {
	Query: require("./query"),
	Mutation: require("./mutation"),
	Album: {
		images: (parent, args, context) => {
			return prisma.album({ id: parent.id }).images();
		}
	}
};

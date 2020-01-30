const { prisma } = require("../../prisma/generated/prisma-client/");

module.exports = {
	Query: require("./query"),
	Mutation: require("./mutation"),
	User: {
		albums: (parent, args, context) => {
			// console.log(parent);
			return prisma.user({ id: parent.id }).albums();
		}
	}
};

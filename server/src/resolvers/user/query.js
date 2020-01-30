const { prisma } = require("../../prisma/generated/prisma-client");

function users(parent, args, { dataSources }, info) {
	return prisma.users({ where: args.where });
}

function user(parent, args, { dataSources }, info) {
	return prisma.user(args.where);
}

module.exports = {
	users,
	user
};

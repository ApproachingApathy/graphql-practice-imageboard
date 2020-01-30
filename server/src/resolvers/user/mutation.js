const { prisma } = require("../../prisma/generated/prisma-client");

function createUser(parent, args, context, info) {
	return prisma.createUser(args.data);
}

function updateUser(parent, args, context, info) {
	return prisma.updateUser({ data: args.data, where: args.where });
}

function deleteUser(parent, args, context, info) {
	return prisma.deleteUser(args.where);
}

module.exports = {
	createUser
};

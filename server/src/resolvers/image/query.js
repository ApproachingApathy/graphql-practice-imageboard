const { prisma } = require("../../prisma/generated/prisma-client/");

function images(parent, args, { dataSources }, info) {
	return prisma.images({ where: args.where });
}

function image(parent, args, { dataSources }, info) {
	return prisma.images(args.where);
}

module.exports = {
	images,
	image
};

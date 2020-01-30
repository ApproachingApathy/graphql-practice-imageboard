const { prisma } = require("../../prisma/generated/prisma-client/");

function albums(parent, args, context, info) {
	return prisma.albums({ where: { id: args.where } });
}

function album(parent, args, context, info) {
	return prisma.album(args.where);
}

module.exports = {
	albums,
	album
};

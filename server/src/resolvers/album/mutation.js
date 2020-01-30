const { prisma } = require("../../prisma/generated/prisma-client");

function createAlbum(parent, args, context, info) {
	return prisma.createAlbum(args.data);
}

function updateAlbum(parent, args, context, info) {
	return prisma.updateAlbum({ data: args.data, where: args.where });
}

function deleteAlbum(parent, args, context, info) {
	return prisma.deleteAlbum(args.where);
}

module.exports = {
	createAlbum,
	updateAlbum,
	deleteAlbum
};

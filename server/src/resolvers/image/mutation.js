const { prisma } = require("../../prisma/generated/prisma-client");

function createImage(parent, args, context, info) {
	return prisma.createImage(args.data);
}

function updateImage(parent, args, context, info) {
	return prisma.updateImage({ data: args.data, where: args.where });
}

function deleteImage(parent, args, context, info) {
	return prisma.updateImage(args.where);
}

module.exports = {
	createImage,
	updateImage,
	deleteImage
};

async function singleUpload(parent, args, context, file) {
	const { stream, filename, mimetype, encoding } = await file;
	console.log(file);
}

module.exports = {
  publicPath:
	//set your app URL
    process.env.NODE_ENV === "production" ? "/" : "/",
};

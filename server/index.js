const express = require("express");
const app = express();
const blogRoutes = require("./routes/blog");
// const groupRoutes = require("./routes/group");
// const codeRoutes = require("./routes/code")
const database = require("./config/database");
const cors = require("cors");  
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000", //frontend port number
		credentials: true,
	})
);

// Setting up routes
app.use("/api/v1/blog", blogRoutes);
// app.use("/api/v1/group", groupRoutes);
// app.use("/api/v1/code", codeRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
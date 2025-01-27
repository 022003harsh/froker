const express = require("express");
const app = express();
const blogRoutes = require("./routes/blog");
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
		origin: "*", //frontend port number
		credentials: true,
	})
);

// Setting up routes
app.use("/api/v1/blog", blogRoutes);

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
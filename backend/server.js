const express = require("express");
const rateLimit = require('express-rate-limit');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
  

connectDb();
const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(limiter);
app.use("/api/notes", require("./routes/notesRoutes"));
app.use("/api/auth", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=> {
    console.log(`Server running ${port}`)
});

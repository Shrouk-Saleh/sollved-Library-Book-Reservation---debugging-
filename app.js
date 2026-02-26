require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded());


async function dbConnection(){
    try{
       await mongoose.connect(process.env.URL)
        console.log("DB IS CONNECTION");
        
    }
    catch{
        console.log(error);
        
    }
}
dbConnection();

app.use("/api", bookRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Library Server Running"));


import express from "express"
import movieRoutes from "./routes/movies.route.js"
import connectDb from "./lib/db.js"

const app = express()
const PORT =  6969

//connect DB
connectDb();


app.get('/',(req,res)=>{
    res.json({msg:"Hello world!!!!"});
});

// CURD Functionalities

app.use("/movies",movieRoutes);



app.listen(PORT,()=>{

    console.log(`The server is Running at : http://localhost:${PORT}`);
});
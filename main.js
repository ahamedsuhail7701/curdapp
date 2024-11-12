import express from "express"

const app = express()
const PORT =  6969


app.get('/',(req,res)=>{
    res.json({msg:"Hello world!!"});
});

// CURD Functionalities

// R -  For Reading

app.get("/movies",()=>{

});

// C - For Creating movies

app.post("/movies",()=>{

});

// U - For updating movie

app.put("/movies:id",()=>{

});

// D - For Deleting Movie

app.delete("/movies:id",()=>{

});


app.listen(PORT,()=>{

    console.log(`The server is Running at : http://localhost:${PORT}`);
});
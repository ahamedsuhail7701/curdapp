import express from "express"


const router = express.Router();
// R -  For Reading

router.get("/",(req,res)=>{
    res.send("Get all Movies");
});

// C - For Creating movies

router.post("/",(req,res)=>{
    res.send("Create  Movies");
});

// U - For updating movie

router.put("/:id",(req,res)=>{
    
    res.send("Updated the movie");
});

// D - For Deleting Movie

router.delete("/:id",(req,res)=>{
    res.send("Deleted the movie");
});

export default router;
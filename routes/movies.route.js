import express from "express"
import { MovieCreate, MovieDelete, MovieDetail, MovieDetailByNameAndId, MovieList, MovieUpdate } from "../controller/movie.controller.js";


const router = express.Router();
// R -  For Reading

router.get("/",MovieList);

// Fetch movie by giving id 

router.get("/:id",MovieDetail);

// Fetch movie by giving id and name 
router.get("/:id/:name", MovieDetailByNameAndId);


// C - For Creating movies

router.post("/",MovieCreate);

// U - For updating movie

router.put("/:id",MovieUpdate);

// D - For Deleting Movie

router.delete("/:id",MovieDelete);

export default router;
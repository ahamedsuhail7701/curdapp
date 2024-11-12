import express from "express"
import { MovieCreate, MovieDelete, MovieList, MovieUpdate } from "../controller/movie.controller.js";


const router = express.Router();
// R -  For Reading

router.get("/",MovieList);

// C - For Creating movies

router.post("/",MovieCreate);

// U - For updating movie

router.put("/:id",MovieUpdate);

// D - For Deleting Movie

router.delete("/:id",MovieDelete);

export default router;
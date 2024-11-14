import Movie from "../model/movie.model.js";

export const MovieList = async(req,res)=>{
    try {
      const movies =  await Movie.find();
      res.json(movies);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const MovieDetail = async(req,res)=>
{
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie==null)
        {
           return res.status(404).json({message:"Movie Not Found"})
        }
        else
        {
            return res.json(movie);
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const MovieDetailByNameAndId = async (req, res) => {
    const { id, name } = req.params;
    
    try {
        const movie = await Movie.findOne({ _id: id, title: name });
        if (movie == null) {
            return res.status(404).json({ message: "Movie Not Found" });
        } else {
            return res.json(movie);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const MovieCreate = async (req,res)=>{
    
 const newMovie = new Movie(
        {
            title : req.body.title,
            desc : req.body.desc,
        }
    );

 try {
    const movie =  await newMovie.save();
    return res.status(201).json(movie);
 } catch (error) {
    return res.status(400).json({message:error.message});
 }
}

export const MovieUpdate = async(req,res)=>{

    try {
       const updateMovie = await Movie.findOneAndUpdate(
            {_id:req.params.id},
            {
                title:req.body.title,
                desc:req.body.desc
            },
            {
                new : true,
            }
        );
      res.status(200).json(updateMovie);  
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    
    // if(req.body.title != null)
    // {
    //     res.movie.title = req.body.title;
    // }

    // if(req.body.desc != null)
    // {
    //     res.movie.desc = req.body.desc;
    // }

    // try {
    //    const updateMovie =  await res.movie.save();
    //    res.json(updateMovie);
    // } catch (error) {
    //     res.status(400).json({message:error.message});
    // }
}

export const MovieDelete = (req,res)=>{
    res.send("Deleted the movie");
}
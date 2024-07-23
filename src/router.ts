import { Router, Request, Response } from "express"
import { createMovie, findMoviesById, getAllMovies , deleteMoviesById, updateMovieById} from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

router.get("/ping", validate, (req: Request, res: Response) => {
    res.status(200).send("pong")
});

router.post("/movie", movieCreateValidation(), validate, createMovie)

router.get("/movie/:id", validate, findMoviesById)

router.get("/movie", validate, getAllMovies)

router.delete("/movie/:id", validate, deleteMoviesById)

router.patch("/movie/:id", movieCreateValidation(),validate, updateMovieById)

export default router
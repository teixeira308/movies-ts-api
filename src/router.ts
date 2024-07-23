import {Router, Request, Response} from "express"
import { createMovie,findMoviesById } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

router.get("/ping",validate, (req: Request, res: Response) =>{
    res.status(200).send("pong")
});

router.post("/movie",movieCreateValidation(),validate,createMovie)

router.get("/movie/:id",validate,findMoviesById)

export default router
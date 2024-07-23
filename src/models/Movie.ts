import {model, Schema} from "mongoose"

const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        actors: {type: Array},
        poster: {type: String},
    },
    {
        timestamps: true
        //adiciona valores de criado e alterado 
    }
)

export const MovieModel = model("Movie", movieSchema);
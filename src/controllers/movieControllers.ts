import { Request, Response } from "express"

import { MovieModel } from "../models/Movie"

import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (error: any) {
        Logger.error(`Erro: ${error.message}`)
        return res.status(500).json({ error: "Por favor tente mais tarde." })
    }

}

export async function findMoviesById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id)
        if (!movie) {
            return res.status(404).json({ error: "filme não existe" })
        }
        return res.status(200).json(movie)
    } catch (error: any) {
        Logger.error(`Erro: ${error.message}`)
        return res.status(500).json({ error: "Por favor tente mais tarde." })
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movie = await MovieModel.find()
        return res.status(200).json(movie)
    } catch (error: any) {
        Logger.error(`Erro: ${error.message}`)
        return res.status(500).json({ error: "Por favor tente mais tarde." })
    }
}

export async function deleteMoviesById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        // Validate ID format (assuming ObjectId format for MongoDB)
        if (!/^[\da-fA-F]{24}$/.test(id)) {
            return res.status(400).json({ error: 'Invalid movie ID format' });
        }

        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        await movie.deleteOne();
        return res.status(200).json({ message: 'Movie deleted successfully' });

    } catch (error: any) {
        Logger.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Please try again later.' });
    }
}

export async function updateMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        // Validate ID format (assuming ObjectId format for MongoDB)
        if (!/^[\da-fA-F]{24}$/.test(id)) {
            return res.status(400).json({ error: 'Invalid movie ID format' });
        }

        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        await MovieModel.updateOne({ _id: id }, data);

        const movierefreshed = await MovieModel.findById(id);
        if (!movierefreshed) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        return res.status(200).json(movierefreshed);

    } catch (error: any) {
        Logger.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Please try again later.' });
    }
}
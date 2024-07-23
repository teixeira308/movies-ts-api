require("dotenv").config()
import express from "express"
import config from "config"
import router from "./router"
import db from "../config/db"
import Logger from "../config/logger"
import morganMiddleware from "./middleware/morganMiddleware"
//JSON

const app = express()

app.use(express.json())

app.use(morganMiddleware)

app.use("/v1/",router)

const port = config.get<number>("port")

app.listen( port, async() =>
{
    await db();
    Logger.info(`Server na porta ${port}`)
})
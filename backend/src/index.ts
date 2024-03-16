import express, {Request, Response} from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response: "Ok"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running At Port ${process.env.PORT}`)
})
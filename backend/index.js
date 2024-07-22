import express from "express"
import dotenv from "dotenv"
import UsersRouter from './src/routes/users/usersRoute.js'


dotenv.config()

const app = express()

app.use(express.json())

app.use(UsersRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server Running At Port ${process.env.PORT}`)
})
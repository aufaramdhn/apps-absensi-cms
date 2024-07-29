import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import FileUpload from "express-fileupload"
import usersRouter from './src/routes/users/usersRoute.js'
import authRouter from './src/routes/auth/authRoute.js'


dotenv.config()

const app = express()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.static("src/public"))
app.use(FileUpload())

app.use(usersRouter)
app.use(authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server Running At Port ${process.env.PORT}`)
})
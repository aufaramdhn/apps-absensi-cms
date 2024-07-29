import express from "express"
import { Login, Logout, Me } from "../../controller/auth/authController.js"

const router = express.Router()

router.post("/login", Login)
router.get("/me", Me)
router.post("/logot", Logout)

export default router
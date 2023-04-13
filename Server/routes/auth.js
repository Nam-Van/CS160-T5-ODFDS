import express from "express"
import { login, logout, register, dregister, dlogin } from "../controllers/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/dregister", dregister)
router.post("/login", login)
router.post("/dlogin", dlogin)
router.post("/logout", logout)


export default router
import { Router } from 'express';
import { LogoutUser,LoginUser,registerUser,refreshAccessToken} from "../controllers/User.controller.js"
// import { upload } from '../middlewares/Multer.middleware.js';
import {jwtverify} from '../middlewares/Auth.middleware.js'
const router = Router()

router.route("/register").post(
    registerUser )

    router.route("/login").post(LoginUser)

    router.route("/logout").post( jwtverify , LogoutUser)
    router.route("refresh-token").post(refreshAccessToken)

export default router 
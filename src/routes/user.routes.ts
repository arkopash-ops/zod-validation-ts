import express from "express";
import * as userController from '../controllers/user.controller';
import validate from "../middlewares/validate.middleware";
import { userSchema } from "../schemas/user.schema";

const router = express.Router();

router.post(
    "/create",
    validate(userSchema),
    userController.createUser
);

router.get(
    "/AllUser",
    userController.getAllUsers
)

export default router;

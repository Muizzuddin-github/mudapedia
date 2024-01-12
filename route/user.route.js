import Express from "express";
import adminController from "../controller/admin.controller.js";


const userRoute = Express.Router();

userRoute.get(
    "/content",
    adminController.getContent
);

export default userRoute;
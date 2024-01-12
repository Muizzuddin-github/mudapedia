import express from "express";
import adminController from "../controller/admin.controller.js";
import authJwt from "../middleware/authJwt.js";


const adminRoute = express.Router();

adminRoute.get(
    "/test",
    adminController.test
);

// register admin
adminRoute.post(
    "/register",
    adminController.registerAdmin
);

// login admin
adminRoute.post(
    '/login',
    adminController.loginAdmin
);

// dashboard
adminRoute.get(
    '/dashboard',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.dashboard
);

// created content
adminRoute.post(
    '/dashboard/content',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.createContent
)

// get content
adminRoute.get(
    '/dashboard/content',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.getContent
)

// update content
adminRoute.put(
    '/dashboard/content/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.updateContent
)

// delete content
adminRoute.delete(
    '/dashboard/content/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.deleteContent
)

export default adminRoute;
import express, { Router } from "express";
import { cloudRouter } from "./media/cloudinary.js";
import { mediaRouter } from "./media/mediaRouter.js";
import { usersRouter } from "./users/usersRouter.js";

export const indexRouter = Router () 
indexRouter.use('/users',usersRouter)
indexRouter.use('/media',mediaRouter)
indexRouter.use('/cloudinary',cloudRouter)

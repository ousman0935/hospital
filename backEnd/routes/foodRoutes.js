import express from 'express';
import { getFoods,getFood,editFood,deleteFood,addFoods } from '../controler/foodControler.js';
export const foodRouter=express.Router();
foodRouter.get("/foods",getFoods);
foodRouter.get("/food/:id",getFood);
foodRouter.post("/food",addFoods);
foodRouter.put("/food/:id",editFood);
foodRouter.delete("/food/:id",deleteFood);
foodRouter.delete("/edit/:id",editFood)

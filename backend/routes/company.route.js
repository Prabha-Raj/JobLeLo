import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
const companyRoutes = express.Router();

// route/paths
companyRoutes.route("/register").post(isAuthenticated,registerCompany);
companyRoutes.route("/get").get(isAuthenticated,getCompany);
companyRoutes.route("/get/:id").get(isAuthenticated,getCompanyById);
companyRoutes.route("/update/:id").put(isAuthenticated,updateCompany);

export default companyRoutes
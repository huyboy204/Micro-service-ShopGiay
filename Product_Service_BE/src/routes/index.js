import { Router } from "express";


import productRoutes from "./product.js";
import brandRoutes from "./brand.js";
import dataRoutes from "./data.js";

const router = Router();

router.use(productRoutes);
router.use(brandRoutes);
router.use(dataRoutes);

export default router;

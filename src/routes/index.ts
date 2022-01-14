import { Router } from "express";

import { transactionsRoutes } from "./transactions.routes";

const router = Router();

router.use("/transactions", transactionsRoutes);

export { router };

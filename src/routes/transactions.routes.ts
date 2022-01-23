import { Router } from "express";

import TransactionController from "../controllers/TransactionController";

const transactionsRoutes = Router();

transactionsRoutes.post("/", TransactionController.create);
transactionsRoutes.get("/", TransactionController.getAll);
transactionsRoutes.get("/:id", TransactionController.getById);

export { transactionsRoutes };

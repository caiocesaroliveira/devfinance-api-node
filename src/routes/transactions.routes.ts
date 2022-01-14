import { Router } from "express";

import { transactions } from "../database/db";
import { Transaction } from "../entities/Transaction";

const transactionsRoutes = Router();

transactionsRoutes.get("/", (_, response) => {
  return response.status(200).json(transactions);
});

transactionsRoutes.get("/:id", (request, response) => {
  const { id } = request.params;
  const transaction = transactions.find((transaction) => transaction.id === id);
  return response.status(200).json(transaction);
});

transactionsRoutes.post("/", (request, response) => {
  const { description, amount, date, type } = request.body;
  const transactionAlreadyExists = transactions.find(
    (transaction) => transaction.description === description
  );

  if (transactionAlreadyExists) {
    response.status(400).json({ error: "transaction already exists!" });
  }
  const newTransaction = new Transaction();
  Object.assign(newTransaction, {
    description,
    amount,
    date,
    type,
  });

  transactions.push(newTransaction);

  return response.status(200).json(transactions);
});

export { transactionsRoutes };

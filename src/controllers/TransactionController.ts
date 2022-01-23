import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import TransactionRepository from "../repositories/TransactionRepository";

class TransactionController {
  async create(request: Request, response: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const { description, amount, type } = request.body;

    const alreadyExists = await transactionRepository.findOne({ description });

    if (alreadyExists)
      return response
        .status(400)
        .json({ message: "Transaction already exists" });

    const newTransaction = transactionRepository.create({
      description,
      amount,
      type,
    });

    await transactionRepository.save(newTransaction);

    return response.status(201).json(newTransaction);
  }
  async getAll(_, response: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactions = await transactionRepository.find();

    return response.status(200).json(transactions);
  }

  async getById(request: Request, response: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const { id } = request.params;

    const transaction = await transactionRepository.findOne({ id });

    return response.status(200).json(transaction);
  }
}

export default new TransactionController();

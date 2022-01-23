import { EntityRepository, Repository, Transaction } from "typeorm";

import { TransactionEntity } from "../models/TransactionEntity";

@EntityRepository(TransactionEntity)
class TransactionRepository extends Repository<TransactionEntity> {}

export default TransactionRepository;

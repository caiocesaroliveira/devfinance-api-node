import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("transactions")
class TransactionEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  type: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { TransactionEntity };

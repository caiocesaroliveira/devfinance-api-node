import { v4 as uuidv4 } from "uuid";

class Transaction {
  id?: string;
  description: string;
  amount: number;
  date: string;
  type: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Transaction };

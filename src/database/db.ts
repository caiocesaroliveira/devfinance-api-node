import { Transaction } from "../entities/Transaction";

export const transactions: Transaction[] = [
  {
    id: "152a41cc-b635-4f62-b635-3106e10016a6",
    description: "Receita 01",
    amount: 5000.0,
    date: "2022-01-06T10:00:00",
    type: "income",
  },
  {
    id: "27ef6b25-a74f-4bb3-86a4-33325917e933",
    description: "Despesa 01",
    amount: 75.23,
    date: "2022-01-01T10:00:00",
    type: "income",
  },
  {
    id: "76436ff9-0197-467c-a429-49d718f3acf3",
    description: "Despesa 02",
    amount: 16.9,
    date: "2022-01-06T10:00:00",
    type: "expense",
  },
];

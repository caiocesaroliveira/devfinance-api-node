import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.get("/", (_, response) => {
  return response
    .status(200)
    .json({ message: `Server is running on port ${PORT}` });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

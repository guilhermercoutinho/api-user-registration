import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
// import prisma from "./src/model/prisma.js";

const app = express();
app.use(express.json());

app.use("/usuarios", userRoutes);

// app.get("/usuarios", async (req, res) => {
//   const allUsers = await prisma.user.findMany();

//   res.status(200).json(allUsers);
// });

// app.post("/usuarios", async (req, res) => {
//   const { name, age, gender, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name,
//       age,
//       gender,
//       email,
//     },
//   });

//   res.status(201).json({ message: "Usuário cadastrado com sucesso!", newUser });
// });

const port = 3000;
app.listen(port, () => console.log(`🚀 Servidor iniciado na porta ${port}`));

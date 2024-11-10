import userModel from "../model/userModel.js";
import getAvatarByGender from "../util/avatarService.js";
import { createUserSchema } from "../validations/userValidation.js";

const userController = {
  async getAllUsers(req, res) {
    try {
      const allUser = await userModel.getAllusers();

      res.status(200).json(allUser);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!", error });
    }
  },

  async createUser(req, res) {
    const data = req.body;
    const { error, value } = createUserSchema.validate(data);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      value.avatarUrl = getAvatarByGender(value.gender, value.name);
    }
    try {
      const newUser = await userModel.createUser(value);

      res
        .status(201)
        .json({ message: "Usuário cadastrado com sucesso!", newUser });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno do servidor ao cadastrar.", error });
    }
  },

  async updateUser(req, res) {
    const { id } = req.params;

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const updatedUser = await userModel.updateUser(id, req.body);

      res.status(200).json({
        message: `Usuário ID ${id} cadastrado com sucesso.`,
        updatedUser,
      });
    } catch (error) {
      res.status(404).json({ message: `Usuario ID ${id} não encontrado!` });
    }
  },

  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const deletedUser = await userModel.deleteUser(id);

      res.status(200).json({
        message: `Usuário ID ${id} deletado com sucesso.`,
        deletedUser,
      });
    } catch (error) {
      res.status(404).json({ message: `Usuario ID ${id} não encontrado!` });
    }
  },
};

export default userController;

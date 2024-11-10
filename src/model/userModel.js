import prisma from "../config/prismaClient.js";

const userModel = {
  async getAllusers() {
    return prisma.user.findMany();
  },

  async createUser(data) {
    return prisma.user.create({ data });
  },

  async updateUser(id, data) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id) {
    return prisma.user.delete({
      where: { id },
    });
  },
};

export default userModel;

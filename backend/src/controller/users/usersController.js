import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// CREATE USER
export const createUser = async (req, res) => {
  const { name, email, password, numberHp, address, photo, role } = req.body;

  const emailUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (emailUser)
    return res.status(400).json({ message: "Email Is Already Registered" });

  try {
    await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
        numberHp: numberHp,
        address: address,
        photo: photo,
        role: role,
      },
    });

    res.status(200).json({
      message: "Register Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// GET DATA ALL USER
export const getUser = async (req, res) => {
  const user = await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      numberHp: true,
      address: true,
      photo: true,
    },
  });

  if (!user)
    return res.status(404).json({
      data: user,
      message: "No Data",
    });

  res.status(200).json({
    data: user,
    message: "Ok",
  });
};

// GET DATA USER BY ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.users.findFirst({
      select: {
        id: true,
        name: true,
        email: true,
        numberHp: true,
        address: true,
        photo: true,
      },
      where: {
        id: Number(id),
      },
    });

    if (!user)
      return res.status(404).json({
        data: user,
        message: "Users Not Found",
      });

    res.status(200).json({
      data: user,
      message: "Ok",
    });
  } catch (error) {
    res.json({ error });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, numberHp, address, photo } = req.body;

  const getUser = await prisma.users.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!getUser) return res.status(404).json({ message: "Users Not Found" });

  try {
    await prisma.users.update({
      data: {
        name: name,
        email: email,
        password: password,
        numberHp: numberHp,
        address: address,
        photo: photo,
      },
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "User Updated" });
  } catch (error) {
    res.json({ error });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const getUser = await prisma.users.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!getUser) return res.status(404).json({ message: "Users Not Found" });

  try {
    await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.json({ error });
  }
};

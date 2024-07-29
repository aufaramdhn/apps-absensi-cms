import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

const prisma = new PrismaClient();

export const Login = async (req, res) => {
  // Get user
  const user = await prisma.users.findFirst({
    where: {
      email: req.body.email,
    },
  });
  // Check User In Database
  if (!user) return res.status(404).json({ message: "User Not Found" });

  const match = await argon2.verify(user.password, req.body.password);

  // Check Password match or not at database
  if (!match) return res.status(400).json({ message: "Password Wrong" });

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    numberHp: user.numberHp,
    address: user.address,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 1,
  });

  res.status(200).json({
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      numberHp: user.numberHp,
      address: user.address,
      role: user.role,
    },
    token: token,
  });
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ message: "can't logout" });
    res.status(200).json({ message: "you have logged out" });
  });
};

export const Me = async (req, res) => {
  if (!req.session.userId)
    return res.status(401).json({ message: "please login in your account" });

  const user = await prisma.users.findFirst({
    where: {
      id: req.session.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      numberHp: true,
      address: true,
      role: true,
    },
  });
  // Check User In Database
  if (!user) return res.status(404).json({ message: "User Not Found" });
};

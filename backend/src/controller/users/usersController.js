import path from "path";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// CREATE USER
export const createUser = async(req, res) => {
  // INPUT DATA
  const { name, email, password, numberHp, address, role } = req.body;
  const image = req.files

  if(image === null) return res.status(404).json({message: "No File Uploaded"})

  // IMAGE
  const file = image;
  const fileSize = file.image.data.length;
  const extension = path.extname(file.image.name);
  const fileName = file.image.md5 + extension;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(extension.toLowerCase()))
    return res.status(422).json({ message: "Invalid Images" });
  if (fileSize > 3000000)
    return res.status(422).json({ message: "image must be less than 5 MB" });
  

  const emailUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (emailUser)
    return res.status(400).json({ message: "Email Is Already Registered" });

  file.image.mv(`../../public/images/${fileName}`, async () => {
    try {
      await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: password,
          numberHp: numberHp,
          address: address,
          image: fileName,
          urlImage: url,
          role: role,
        },
      });
  
      res.status(200).json({
        message: "User Created Successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
  
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
      image: true,
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
        image: true,
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
  const { name, email, password, numberHp, address, image } = req.body;

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
        image: image,
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

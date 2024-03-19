import { PrismaClient } from '@prisma/client'
import express from 'express'

const router = express.Router()
const prisma = new PrismaClient()

// Register
router.post('/register', async (req, res) => {
    const { name, email, password, noHp, alamat, photo } = req.body

    const emailUser = await prisma.users.findUnique({
        where: {
            email: email
        }
    })
    if (emailUser) return res.status(400).json({ message: "Email Is Already Registered" })


    try {
        await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: password,
                noHp: noHp,
                alamat: alamat,
                photo: photo
            }
        })

        res.status(200).json({
            message: 'Register Successfully'
        })

    } catch (error) {
        res.status(500).json({ message: error })
    }

})

// Get Users
router.get('/users', async (req, res) => {
    const user = await prisma.users.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            noHp: true,
            alamat: true,
            photo: true
        }
    })

    res.status(200).json({
        data: user,
        message: 'Ok'
    })
})

// Get Users By Id
router.get('/users/:id', async (req, res) => {

    const { id } = req.params
    try {
        const user = await prisma.users.findFirst({
            select: {
                id: true,
                name: true,
                email: true,
                noHp: true,
                alamat: true,
                photo: true
            },
            where: {
                id: Number(id)
            }
        })

        if (!user) return res.status(404).json({ message: "Users Not Found" })

        res.status(200).json({
            data: user,
            message: "Ok"
        })
    } catch (error) {
        res.json({ error })
    }



})

// Update Users
router.patch('/users/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, password, noHp, alamat, photo } = req.body

    const getUser = await prisma.users.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!getUser) return res.status(404).json({ message: "Users Not Found" })


    try {
        await prisma.users.update({
            data: {
                name: name,
                email: email,
                password: password,
                noHp: noHp,
                alamat: alamat,
                photo: photo
            },
            where: {
                id: Number(id)
            }
        })

        res.status(200).json({ message: "User Updated" })

    } catch (error) {
        res.json({ error })
    }

})

// Delete Users
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params

    const getUser = await prisma.users.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!getUser) return res.status(404).json({ message: "Users Not Found" })

    try {
        await prisma.users.delete({
            where: {
                id: Number(id)
            }
        })

        res.status(200).json({ message: "User Deleted" })
    } catch (error) {
        res.json({ error })
    }
})




export default router
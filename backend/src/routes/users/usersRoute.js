import express from 'express'
import { createUser, deleteUser, getUser, getUserById, updateUser } from '../../controller/users/usersController.js'

const router = express.Router()

// Register
router.post('/create', createUser)

// Get Users
router.get('/users', getUser)

// Get Users By Id
router.get('/users/:id', getUserById)

// Update Users
router.patch('/users/:id', updateUser)

// Delete Users
router.delete('/users/:id', deleteUser)




export default router
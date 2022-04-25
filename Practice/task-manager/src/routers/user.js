import express from 'express';
import { User } from '../models/user.js'
import { auth } from '../middleware/auth.js'

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ token })
    } catch (e) {
        res.status(400).send(e)
    }
})


router.post('/users/login', async (req, res) => {
    console.log('Logging in...');
})

router.post('/users/logout', async (req, res) => {
   console.log('Logging out...');
})

router.post('/users/logoutAll', async (req, res) => {
 console.log('Logging out all...');
})

router.get('/users/me', async (req, res) => {
    res.send('Hello there');
})

export default router;
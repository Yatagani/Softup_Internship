import express from 'express';
import { Task } from '../models/task.js'

const router = new express.Router()

router.post('/tasks', async(req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

export default router;
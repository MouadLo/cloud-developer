import { Router, Request, Response } from 'express';
import { TaskItem } from '../models/TaskItem';
import { requireAuth } from '../../users/routes/auth.router';
import * as AWS from '../../../../aws';

const router: Router = Router();

// Get all task items
router.get('/', async (req: Request, res: Response) => {
    const items = await TaskItem.findAndCountAll({order: [['id', 'DESC']]});

    res.send(items);
});


// update a specific resource
router.patch('/:id', 
    requireAuth, 
    async (req: Request, res: Response) => {
        //@TODO try it yourself
        res.send(500).send("not implemented")
});



router.post('/', requireAuth, async (req: Request, res: Response) => {
    const title = req.body.title
    const isCompleted = req.body.isCompleted

    // check if title is valid
    if (!title) {
        return res.status(400).send({ message: 'Title is required or malformed' });
    }

    // check if isCompleted is valid
    if (!isCompleted) {
        return res.status(400).send({ message: 'isCompleted is required or malformed' });
    }

    const item = await new TaskItem({
        title: title,
        isCompleted: isCompleted
    });

    const saved_item = await item.save();
    res.status(201).send(saved_item);
})

export const TaskRouter: Router = router;
import { Router, Request, Response, NextFunction } from "express";
import messageRepositorie from "../repositories/message-repositorie";

const contactRouter = Router();

contactRouter.get('/contact', async (req: Request, res: Response, next: NextFunction) => {
    const messages = await messageRepositorie.getAllMessages();
    res.status(200).send(messages);
})

contactRouter.post('/contact', async (req: Request, res: Response, next: NextFunction) => {
    const message = req.body;
    res.status(201).send();
})

export default contactRouter;
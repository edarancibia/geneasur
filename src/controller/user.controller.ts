import { Request, Response } from "express"
import { createUser, IUser } from '../service/User.service';

export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const user: IUser = req.body;
        const newUser = await createUser(user);
    
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error});
    }
}
import { Router } from "express";
import { createUserHandler } from "../controller/user.controller";

const router = Router();

router.get('/hello', (req, res) => res.send('Hello world'));

router.post('/', createUserHandler);

export default router;
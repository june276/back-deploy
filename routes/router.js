import express from 'express';
import { main, test } from '../controller/controller.js';

const router = express.Router();

router.get('/', main);
router.post('/text', test);

export default router;

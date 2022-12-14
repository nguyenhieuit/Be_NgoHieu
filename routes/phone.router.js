import express from 'express';
import phoneControllers from '../controllers/phone.controller.js';
const router = express.Router();
router.post('/create', phoneControllers.create);
router.get('/search', phoneControllers.search);
router.get('/:id', phoneControllers.show);
router.delete('/:id',phoneControllers.delete);
router.patch('/:id/edit' ,phoneControllers.update);
router.get('/', phoneControllers.index);
export default router;
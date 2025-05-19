import { Router } from 'express';
import * as pjController from '../controllers/pjcontroller';
import { protect, authorizeRole } from '../middlewares/authmiddleware';

const router: Router = Router();

router.get('/', protect,pjController.getAllPJ);
router.get('/:nik',protect,pjController.getPJByNama);
router.post('/', protect,authorizeRole('ADMIN'),pjController.addPJ);
router.put('/:nik', protect,authorizeRole('ADMIN'),pjController.updatePJ);
router.delete('/:nik',protect,authorizeRole('ADMIN'), pjController.deletePJ);

export default router;
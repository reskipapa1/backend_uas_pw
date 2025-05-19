import { Router } from 'express';
import * as proyektorController from '../controllers/proyektorcontroller';
import { protect, authorizeRole } from '../middlewares/authmiddleware';

const router: Router = Router();

router.get('/',protect, proyektorController.getAllProyektor);
router.get('/:kode_proyektor', protect,proyektorController.getProyektorById);
router.post('/',protect,authorizeRole('ADMIN'), proyektorController.addProyektor);
router.put('/:kode_proyektor',protect,authorizeRole('ADMIN'),proyektorController.updateProyektor);
router.patch('/:kode_proyektor',protect,authorizeRole('ADMIN'), proyektorController.updateStatusProyektor);
router.delete('/:kode_proyektor',protect,authorizeRole('ADMIN'), proyektorController.deleteProyektor);

export default router;
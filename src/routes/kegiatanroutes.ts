import { Router } from 'express';
import * as kegiatanController from '../controllers/kegiatancontroller';
import { protect, authorizeRole } from '../middlewares/authmiddleware';

const router: Router = Router();

router.get('/',protect, kegiatanController.getAllKegiatan);
router.get('/:kode_transaksi',protect, kegiatanController.getKegiatanById);
router.post('/',protect,authorizeRole('ADMIN'), kegiatanController.createKegiatan);
router.put('/:kode_transaksi',protect,authorizeRole('ADMIN'), kegiatanController.updateKegiatan);
router.delete('/:kode_transaksi', protect,authorizeRole('ADMIN'),kegiatanController.deleteKegiatan);

export default router;
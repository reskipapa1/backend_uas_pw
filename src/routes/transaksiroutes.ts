import { Router } from 'express';
import * as transaksiController from '../controllers/transaksicontroller';
import { protect, authorizeRole } from '../middlewares/authmiddleware';

const router: Router = Router();

router.get('/', protect,transaksiController.getAllTransaksi);
router.get('/:kode_transaksi',protect, transaksiController.getTransaksiByKode);
router.post('/',protect,authorizeRole('ADMIN'), transaksiController.addTransaksi);
router.patch('/:kode_transaksi',protect,authorizeRole('ADMIN'), transaksiController.kembalikanTransaksi);
router.delete('/:kode_transaksi',protect,authorizeRole('ADMIN'), transaksiController.deleteTransaksi);

export default router;
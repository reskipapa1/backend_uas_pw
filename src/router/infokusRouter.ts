import { Router } from 'express';
import { getAllInfokusBagus, getAllInfokusRusak } from '../controller/infokusController';
import { verifyToken } from '../auth/middleware'; // <-- Tambahkan ini

const router = Router();

// Proteksi semua endpoint dengan token
router.get('/infokus-bagus', verifyToken, getAllInfokusBagus);
router.get('/infokus-rusak', verifyToken, getAllInfokusRusak);

export default router;

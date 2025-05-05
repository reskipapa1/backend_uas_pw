// src/router/peminjamanRouter.ts
import express from 'express';
import { getViewPeminjaman } from '../controller/viewPeminjamanController';

const router = express.Router();

router.get('/view-peminjaman', getViewPeminjaman);

export default router;
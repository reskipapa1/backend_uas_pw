import { Request, Response } from 'express';
import { findAllInfokusBagus, findAllInfokusRusak } from '../service/infokusService';

// Handler untuk ambil semua infokus bagus
export const getAllInfokusBagus = async (req: Request, res: Response) => {
  try {
    const infokus = await findAllInfokusBagus();
    res.json(infokus);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Infokus Bagus', error });
  }
};

// Handler untuk ambil semua infokus rusak
export const getAllInfokusRusak = async (req: Request, res: Response) => {
  try {
    const infokus = await findAllInfokusRusak();
    res.json(infokus);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Infokus Rusak', error });
  }
};

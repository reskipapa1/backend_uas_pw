import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const prisma = new PrismaClient();

export const getAllKegiatan = async (_req: Request, res: Response) => {
    try {
    const kegiatan = await prisma.kegiatan.findMany();
    res.json(kegiatan);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil Semua Data Kegiatan ', error });
  }
};

export const getKegiatanById = async (req: Request,res: Response): Promise<void> => {
  try {
    const kode_transaksi = req.params.kode_transaksi;
    const kegiatan = await prisma.kegiatan.findUnique({
      where: { kode_transaksi },
    });

    if (!kegiatan) {
      res.status(404).json({ message: 'Kegiatan tidak ditemukan' });
      return;
    }

    res.status(200).json(kegiatan);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Kegiatan', error });
  }
};



export const createKegiatan = async (req: Request, res: Response) => {
  const { kode_transaksi, kegiatan, tempat, waktu } = req.body;
  try {
    const newKegiatan = await prisma.kegiatan.create({
      data: {
        kode_transaksi,
        kegiatan,
        tempat,
        waktu: new Date(waktu),
      },
    });
    res.status(201).json(newKegiatan);
  } catch (err) {
    res.status(400).json({ error: 'Gagal membuat kegiatan', details: err });
  }
};

export const updateKegiatan = async (req: Request, res: Response) => {
  const { kode_transaksi } = req.params;
  const { kegiatan, tempat, waktu } = req.body;
  try {
    const updated = await prisma.kegiatan.update({
      where: { kode_transaksi },
      data: {
        kegiatan,
        tempat,
        waktu: new Date(waktu),
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Gagal update, kegiatan tidak ditemukan' });
  }
};

export const deleteKegiatan = async (req: Request, res: Response) => {
  const { kode_transaksi } = req.params;
  try {
    await prisma.kegiatan.delete({ where: { kode_transaksi } });
    res.json({ message: 'Kegiatan berhasil dihapus' });
  } catch (err) {
    res.status(404).json({ error: 'Gagal hapus, kegiatan tidak ditemukan' });
  }
};
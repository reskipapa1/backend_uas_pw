
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllRiwayat = async (_req: Request, res: Response) => {
  try {
    const riwayat = await prisma.transaksi.findMany({
      include: {
        kegiatan: true,
        proyektor: true,
        penanggung_jawab: true,
      },
    });

    const formatted = riwayat.map(item => ({
      kode_transaksi: item.kode_transaksi,
      kode_proyektor: item.kode_proyektor,
      nama: item.penanggung_jawab?.nama,
      kegiatan: item.kegiatan?.kegiatan,
      waktu: item.kegiatan?.waktu,
      waktu_dikembalikan: item.waktu_dikembalikan,

    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching riwayat:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

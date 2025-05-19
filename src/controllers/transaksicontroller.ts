import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const prisma = new PrismaClient();

export const getAllTransaksi = async (_req: Request, res: Response) => {
    try {
    const transaksi = await prisma.transaksi.findMany();
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil Semua Data transaksi ', error });
  }
};

export const getTransaksiByKode = async (req: Request,res: Response): Promise<void> => {
  try {
    const kode_transaksi = req.params.kode_transaksi;
    const transaksi = await prisma.transaksi.findUnique({
      where: { kode_transaksi },
    });

    if (!transaksi) {
      res.status(404).json({ message: 'transaksi tidak ditemukan' });
      return;
    }

    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data transaksi', error });
  }
};
export const addTransaksi = async (req: Request, res: Response) => {
  const { kode_transaksi, kode_proyektor, nik, status } = req.body;

  try {
    const newTransaksi = await prisma.transaksi.create({
      data: { kode_transaksi, kode_proyektor, nik, status },
    });

    // Update status proyektor 
    await prisma.proyektor.update({
      where: { kode_proyektor },
      data: { status: 'sedang dipakai' },
    });

     res.status(201).json(newTransaksi);
  } catch (err: any) {
    console.error('Gagal membuat transaksi:', err);
    res.status(400).json({
      error: 'Gagal membuat Transaksi',
      details: err?.message || String(err),
    });
  }
};

export const kembalikanTransaksi = async (req: Request, res: Response) => {
  const { kode_transaksi } = req.params;

  try {
    // Validasi input
    if (!kode_transaksi) {
       res.status(400).json({ error: 'kode_transaksi diperlukan' });
return;
    }

    const transaksi = await prisma.transaksi.update({
      where: { kode_transaksi },
      data: {
        status: 'sudah dikembalikan',
        waktu_dikembalikan: new Date(),
      },
      include: {
        proyektor: true,
      },
    });

    if (!transaksi) {
       res.status(404).json({ error: 'Transaksi tidak ditemukan' });
       return;
    }

    if (transaksi.kode_proyektor) {
      await prisma.proyektor.update({
        where: { kode_proyektor: transaksi.kode_proyektor },
        data: { status: 'tersedia' },
      });
    }

    // Response format yang konsisten
    res.json({ 
      success: true,
      message: 'Transaksi berhasil dikembalikan',
      data: {
        transaksi: transaksi
      }
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ 
      success: false,
      error: 'Gagal mengembalikan transaksi',
      details: process.env.NODE_ENV === 'development' ? err : undefined
    });
  }
};


export const deleteTransaksi = async (req: Request, res: Response) => {
  const { kode_transaksi } = req.params;
  try {
    await prisma.transaksi.delete({ where: { kode_transaksi} });
    res.json({ message: 'transaksi berhasil dihapus' });
  } catch (err) {
    res.status(404).json({ error: 'Gagal hapus, transaksi tidak ditemukan' });
  }
};
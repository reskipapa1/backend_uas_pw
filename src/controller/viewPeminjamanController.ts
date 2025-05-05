// src/controller/peminjamanController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client'

const prisma = new PrismaClient();

export const getViewPeminjaman = async (req: Request, res: Response) => {
  try {
    // Jika menggunakan SQL view langsung:
    const result = await prisma.$queryRaw`
      SELECT * FROM view_detail_peminjaman
    `;


    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data peminjaman'
    });
  }
};
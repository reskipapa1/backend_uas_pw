import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const prisma = new PrismaClient();

export const getAllProyektor = async (_req: Request, res: Response) => {
    try {
    const proyektor = await prisma.proyektor.findMany();
    res.json(proyektor);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil Semua Data Proyektor ', error });
  }
};

export const getProyektorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const kode_proyektor = req.params.kode_proyektor;
    const proyektor = await prisma.proyektor.findUnique({
      where: { kode_proyektor },
    });

    if (!proyektor) {
      res.status(404).json({ message: 'Proyektor tidak ditemukan' });
      return;
    }

    res.status(200).json(proyektor);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Proyektor', error });
  }
};
export const addProyektor = async (req: Request, res: Response) => {
  const { kode_proyektor, merek, nomor_seri, status } = req.body;
  try {
    const newProyektor = await prisma.proyektor.create({
      data: {
       kode_proyektor, merek, nomor_seri, status,
      },
    });
    res.status(201).json(newProyektor);
  } catch (err) {
    res.status(400).json({ error: 'Gagal membuat Proyektor', details: err });
  }
};

export const updateProyektor = async (req: Request, res: Response) => {
  const { kode_proyektor } = req.params;
  const { merek, nomor_seri, status} = req.body;
  try {
    const updated = await prisma.proyektor.update({
      where: { kode_proyektor },
      data: {
        merek, nomor_seri, status,
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Gagal update, proyektor tidak ditemukan' });
  }
};

export const updateStatusProyektor = async (req: Request, res: Response) => {
  const { kode_proyektor } = req.params;
  const { status} = req.body;
  try {
    const updated = await prisma.proyektor.update({
      where: { kode_proyektor },
      data: {
       status,
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Gagal update, proyektor tidak ditemukan' });
  }
};

export const deleteProyektor = async (req: Request, res: Response) => {
  const { kode_proyektor } = req.params;
  try {
    await prisma.proyektor.delete({ where: { kode_proyektor} });
    res.json({ message: 'proyektor berhasil dihapus' });
  } catch (err) {
    res.status(404).json({ error: 'Gagal hapus, Proyektor tidak ditemukan' });
  }
};
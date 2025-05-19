import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const prisma = new PrismaClient();

export const getAllPJ = async (_req: Request, res: Response) => {
    try {
    const penanggung_jawab = await prisma.penanggung_jawab.findMany();
    res.json(penanggung_jawab);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil Semua Data Peminjam ', error });
  }
};

export const getPJByNama = async(req: Request, res: Response): Promise<void> => {
  try{
    const nama = req.params.nama;
    const penanggung_jawab : any = await prisma.penanggung_jawab.findMany({     where: { nama },});
    if (!penanggung_jawab){
      res.status(404).json({ message: 'Nama Peminjam tidak ditemukan'});
    }

    res.status(200).json(penanggung_jawab);
  }catch(error){
     res.status(500).json({ message: 'Gagal mengambil Data Peminjam ', error });
  }
}

export const addPJ = async (req: Request, res: Response) => {
  const { nik, nama, no_hp } = req.body;
  try {
    const newPJ = await prisma.penanggung_jawab.create({
      data: {
        nik, nama, no_hp,
      },
    });
    res.status(201).json(newPJ);
  } catch (err) {
    res.status(400).json({ error: 'Gagal Menambahkan Peminjam', details: err });
  }
};


export const updatePJ = async (req: Request, res: Response) => {
  const { nik } = req.params;
  const { nama, no_hp } = req.body;
  try {
    const updated = await prisma.penanggung_jawab.update({
      where: { nik },
      data: {
       nama, no_hp
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Gagal update, Peminjam tidak ditemukan' });
  }
};

export const deletePJ = async (req: Request, res: Response) => {
  const { nik } = req.params;
  try {
    await prisma.penanggung_jawab.delete({ where: { nik } });
    res.json({ message: 'Peminjam berhasil dihapus' });
  } catch (err) {
    res.status(404).json({ error: 'Gagal hapus, Peminjam tidak ditemukan' });
  }
};
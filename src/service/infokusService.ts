// src/index.ts
import { PrismaClient } from '../../generated/prisma/client'



const prisma = new PrismaClient();

// Service untuk ambil semua infokus bagus
export const findAllInfokusBagus = async () => {
  return await prisma.infokus_bagus.findMany();
};

// Service untuk ambil semua infokus rusak
export const findAllInfokusRusak = async () => {
  return await prisma.infokus_rusak.findMany();
};

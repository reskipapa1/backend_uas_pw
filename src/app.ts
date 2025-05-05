// src/app.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma'; // sesuaikan path jika beda
import infokusRouter from './router/infokusRouter';
import peminjamanRouter from './router/viewPeminjamanRouter';
import authRouter from './auth/auth';
import { verifyToken } from './auth/middleware'; // sesuaikan path


dotenv.config();

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());

// Routing utama
app.use('/api', infokusRouter);
app.use('/api', peminjamanRouter);
app.use('/auth', authRouter);

// Route khusus profile, pakai token
app.get('/profile', verifyToken, async (req, res) => {
  try {
    const userId = (req as any).user.userId;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err });
  }
});

export default app;

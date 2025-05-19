// src/controllers/authcontroller.ts
import { Request, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

// Tanpa Promise<Response>
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Validasi input
  if (!name || !email || !password) {
  res.status(400).json({ error: "Semua field wajib diisi" });
     return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: "Email sudah terdaftar" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.USER, // default role
      },
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: "Registrasi gagal" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    res.status(400).json({ error: "Email dan password wajib diisi" });
     return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
       if (!user) {
      res.status(404).json({ error: "User tidak ditemukan" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Password salah" });
      return;
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: "Login gagal" });
  }
};

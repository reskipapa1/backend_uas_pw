// src/middleware/authmiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      User?: { id: number; role: string };
    }
  }
}

const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

// Middleware autentikasi JWT
export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: "Tidak ada token, akses ditolak" });
    return;
  }

  // Verifikasi format token
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
   res.status(401).json({ error: "Format token salah" });
   return ;
  }

  try {
    const decoded = verifyToken(token) as { id: number; role: string };
    req.User = { id: decoded.id, role: decoded.role };

    console.log('User role:', req.User?.role);

    next();
  } catch (error) {
   res.status(401).json({ error: "Token tidak valid" });
   return ;
  }
};

// Middleware otorisasi role
export const authorizeRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.User || !roles.includes(req.User.role)) {
    res.status(403).json({ error: "Akses ditolak. Tidak memiliki izin." });
    return ;
    }
    next();
  };
};

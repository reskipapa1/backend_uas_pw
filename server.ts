import app from './src/app'; // ⬅️ Sudah benar
import { PrismaClient } from './generated/prisma/client';

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
};

startServer();

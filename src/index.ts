import express from 'express';
import cors from 'cors';
import kegiatanRoutes from './routes/kegiatanroutes';
import pjRoutes from './routes/pjroutes';
import authRoutes from './routes/authroutes';
import proyektorRoutes from './routes/proyektorroutes';
import transaksiRoutes from './routes/transaksiroutes';
import riwayatRoutes from './routes/riwayatroutes';

const app = express();

// ✅ Tambahkan CORS dengan konfigurasi lengkap
app.use(cors({
  origin: ['http://localhost:3000'], // tambahkan frontend URL saja
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // penting untuk token/jwt
  credentials: true,
}));

// ✅ Pastikan Express bisa handle preflight OPTIONS request
app.options('*', cors());

app.use(express.json());

app.use('/kegiatan', kegiatanRoutes);
app.use('/pj', pjRoutes);
app.use('/proyektor', proyektorRoutes);
app.use('/transaksi', transaksiRoutes);
app.use('/riwayat', riwayatRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

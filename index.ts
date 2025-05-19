import express from 'express';
import cors from 'cors';  // import cors
import kegiatanRoutes from './src/routes/kegiatanroutes';
import pjRoutes from './src/routes/pjroutes';
import authRoutes from './src/routes/authroutes';
import proyektorRoutes from './src/routes/proyektorroutes';
import transaksiRoutes from './src/routes/transaksiroutes';
import riwayatRoutes from './src/routes/riwayatroutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // sesuaikan dengan alamat frontend-mu
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/kegiatan', kegiatanRoutes);
app.use('/pj', pjRoutes);
app.use('/proyektor', proyektorRoutes);
app.use('/transaksi', transaksiRoutes);
app.use('/riwayat', riwayatRoutes);
app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

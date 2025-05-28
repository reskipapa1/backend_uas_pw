import express from 'express';
import cors from 'cors';  // import cors
import kegiatanRoutes from './routes/kegiatanroutes';
import pjRoutes from './routes/pjroutes';
import authRoutes from './routes/authroutes';
import proyektorRoutes from './routes/proyektorroutes';
import transaksiRoutes from './routes/transaksiroutes';
import riwayatRoutes from './routes/riwayatroutes';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000','https://backenduaspw-production.up.railway.app'],  // sesuaikan dengan alamat frontend-mu
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
  credentials: true
}));

 console.log('User role:');

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

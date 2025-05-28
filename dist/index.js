"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // import cors
const kegiatanroutes_1 = __importDefault(require("./src/routes/kegiatanroutes"));
const pjroutes_1 = __importDefault(require("./src/routes/pjroutes"));
const authroutes_1 = __importDefault(require("./src/routes/authroutes"));
const proyektorroutes_1 = __importDefault(require("./src/routes/proyektorroutes"));
const transaksiroutes_1 = __importDefault(require("./src/routes/transaksiroutes"));
const riwayatroutes_1 = __importDefault(require("./src/routes/riwayatroutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // sesuaikan dengan alamat frontend-mu
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));
console.log('User role:');
app.use(express_1.default.json());
app.use('/kegiatan', kegiatanroutes_1.default);
app.use('/pj', pjroutes_1.default);
app.use('/proyektor', proyektorroutes_1.default);
app.use('/transaksi', transaksiroutes_1.default);
app.use('/riwayat', riwayatroutes_1.default);
app.use('/auth', authroutes_1.default);
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

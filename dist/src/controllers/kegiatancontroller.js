"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKegiatan = exports.updateKegiatan = exports.createKegiatan = exports.getKegiatanById = exports.getAllKegiatan = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllKegiatan = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kegiatan = yield prisma.kegiatan.findMany();
        res.json(kegiatan);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil Semua Data Kegiatan ', error });
    }
});
exports.getAllKegiatan = getAllKegiatan;
const getKegiatanById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kode_transaksi = req.params.kode_transaksi;
        const kegiatan = yield prisma.kegiatan.findUnique({
            where: { kode_transaksi },
        });
        if (!kegiatan) {
            res.status(404).json({ message: 'Kegiatan tidak ditemukan' });
            return;
        }
        res.status(200).json(kegiatan);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data Kegiatan', error });
    }
});
exports.getKegiatanById = getKegiatanById;
const createKegiatan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi, kegiatan, tempat, waktu } = req.body;
    try {
        const newKegiatan = yield prisma.kegiatan.create({
            data: {
                kode_transaksi,
                kegiatan,
                tempat,
                waktu: new Date(waktu),
            },
        });
        res.status(201).json(newKegiatan);
    }
    catch (err) {
        res.status(400).json({ error: 'Gagal membuat kegiatan', details: err });
    }
});
exports.createKegiatan = createKegiatan;
const updateKegiatan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi } = req.params;
    const { kegiatan, tempat, waktu } = req.body;
    try {
        const updated = yield prisma.kegiatan.update({
            where: { kode_transaksi },
            data: {
                kegiatan,
                tempat,
                waktu: new Date(waktu),
            },
        });
        res.json(updated);
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal update, kegiatan tidak ditemukan' });
    }
});
exports.updateKegiatan = updateKegiatan;
const deleteKegiatan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi } = req.params;
    try {
        yield prisma.kegiatan.delete({ where: { kode_transaksi } });
        res.json({ message: 'Kegiatan berhasil dihapus' });
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal hapus, kegiatan tidak ditemukan' });
    }
});
exports.deleteKegiatan = deleteKegiatan;

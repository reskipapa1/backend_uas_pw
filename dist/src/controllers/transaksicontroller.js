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
exports.deleteTransaksi = exports.kembalikanTransaksi = exports.addTransaksi = exports.getTransaksiByKode = exports.getAllTransaksi = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllTransaksi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaksi = yield prisma.transaksi.findMany();
        res.json(transaksi);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil Semua Data transaksi ', error });
    }
});
exports.getAllTransaksi = getAllTransaksi;
const getTransaksiByKode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kode_transaksi = req.params.kode_transaksi;
        const transaksi = yield prisma.transaksi.findUnique({
            where: { kode_transaksi },
        });
        if (!transaksi) {
            res.status(404).json({ message: 'transaksi tidak ditemukan' });
            return;
        }
        res.status(200).json(transaksi);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data transaksi', error });
    }
});
exports.getTransaksiByKode = getTransaksiByKode;
const addTransaksi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi, kode_proyektor, nik, status } = req.body;
    try {
        const newTransaksi = yield prisma.transaksi.create({
            data: { kode_transaksi, kode_proyektor, nik, status },
        });
        // Update status proyektor 
        yield prisma.proyektor.update({
            where: { kode_proyektor },
            data: { status: 'sedang dipakai' },
        });
        res.status(201).json(newTransaksi);
    }
    catch (err) {
        console.error('Gagal membuat transaksi:', err);
        res.status(400).json({
            error: 'Gagal membuat Transaksi',
            details: (err === null || err === void 0 ? void 0 : err.message) || String(err),
        });
    }
});
exports.addTransaksi = addTransaksi;
const kembalikanTransaksi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi } = req.params;
    try {
        // Validasi input
        if (!kode_transaksi) {
            res.status(400).json({ error: 'kode_transaksi diperlukan' });
            return;
        }
        const transaksi = yield prisma.transaksi.update({
            where: { kode_transaksi },
            data: {
                status: 'sudah dikembalikan',
                waktu_dikembalikan: new Date(),
            },
            include: {
                proyektor: true,
            },
        });
        if (!transaksi) {
            res.status(404).json({ error: 'Transaksi tidak ditemukan' });
            return;
        }
        if (transaksi.kode_proyektor) {
            yield prisma.proyektor.update({
                where: { kode_proyektor: transaksi.kode_proyektor },
                data: { status: 'tersedia' },
            });
        }
        // Response format yang konsisten
        res.json({
            success: true,
            message: 'Transaksi berhasil dikembalikan',
            data: {
                transaksi: transaksi
            }
        });
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            error: 'Gagal mengembalikan transaksi',
            details: process.env.NODE_ENV === 'development' ? err : undefined
        });
    }
});
exports.kembalikanTransaksi = kembalikanTransaksi;
const deleteTransaksi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_transaksi } = req.params;
    try {
        yield prisma.transaksi.delete({ where: { kode_transaksi } });
        res.json({ message: 'transaksi berhasil dihapus' });
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal hapus, transaksi tidak ditemukan' });
    }
});
exports.deleteTransaksi = deleteTransaksi;

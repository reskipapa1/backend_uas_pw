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
exports.deletePJ = exports.updatePJ = exports.addPJ = exports.getPJByNama = exports.getAllPJ = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPJ = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const penanggung_jawab = yield prisma.penanggung_jawab.findMany();
        res.json(penanggung_jawab);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil Semua Data Peminjam ', error });
    }
});
exports.getAllPJ = getAllPJ;
const getPJByNama = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nama = req.params.nama;
        const penanggung_jawab = yield prisma.penanggung_jawab.findMany({ where: { nama }, });
        if (!penanggung_jawab) {
            res.status(404).json({ message: 'Nama Peminjam tidak ditemukan' });
        }
        res.status(200).json(penanggung_jawab);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil Data Peminjam ', error });
    }
});
exports.getPJByNama = getPJByNama;
const addPJ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nik, nama, no_hp } = req.body;
    try {
        const newPJ = yield prisma.penanggung_jawab.create({
            data: {
                nik, nama, no_hp,
            },
        });
        res.status(201).json(newPJ);
    }
    catch (err) {
        res.status(400).json({ error: 'Gagal Menambahkan Peminjam', details: err });
    }
});
exports.addPJ = addPJ;
const updatePJ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nik } = req.params;
    const { nama, no_hp } = req.body;
    try {
        const updated = yield prisma.penanggung_jawab.update({
            where: { nik },
            data: {
                nama, no_hp
            },
        });
        res.json(updated);
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal update, Peminjam tidak ditemukan' });
    }
});
exports.updatePJ = updatePJ;
const deletePJ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nik } = req.params;
    try {
        yield prisma.penanggung_jawab.delete({ where: { nik } });
        res.json({ message: 'Peminjam berhasil dihapus' });
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal hapus, Peminjam tidak ditemukan' });
    }
});
exports.deletePJ = deletePJ;

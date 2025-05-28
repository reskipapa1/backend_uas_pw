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
exports.deleteProyektor = exports.updateStatusProyektor = exports.updateProyektor = exports.addProyektor = exports.getProyektorById = exports.getAllProyektor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllProyektor = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proyektor = yield prisma.proyektor.findMany();
        res.json(proyektor);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil Semua Data Proyektor ', error });
    }
});
exports.getAllProyektor = getAllProyektor;
const getProyektorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kode_proyektor = req.params.kode_proyektor;
        const proyektor = yield prisma.proyektor.findUnique({
            where: { kode_proyektor },
        });
        if (!proyektor) {
            res.status(404).json({ message: 'Proyektor tidak ditemukan' });
            return;
        }
        res.status(200).json(proyektor);
    }
    catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data Proyektor', error });
    }
});
exports.getProyektorById = getProyektorById;
const addProyektor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_proyektor, merek, nomor_seri, status } = req.body;
    try {
        const newProyektor = yield prisma.proyektor.create({
            data: {
                kode_proyektor, merek, nomor_seri, status,
            },
        });
        res.status(201).json(newProyektor);
    }
    catch (err) {
        res.status(400).json({ error: 'Gagal membuat Proyektor', details: err });
    }
});
exports.addProyektor = addProyektor;
const updateProyektor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_proyektor } = req.params;
    const { merek, nomor_seri, status } = req.body;
    try {
        const updated = yield prisma.proyektor.update({
            where: { kode_proyektor },
            data: {
                merek, nomor_seri, status,
            },
        });
        res.json(updated);
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal update, proyektor tidak ditemukan' });
    }
});
exports.updateProyektor = updateProyektor;
const updateStatusProyektor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_proyektor } = req.params;
    const { status } = req.body;
    try {
        const updated = yield prisma.proyektor.update({
            where: { kode_proyektor },
            data: {
                status,
            },
        });
        res.json(updated);
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal update, proyektor tidak ditemukan' });
    }
});
exports.updateStatusProyektor = updateStatusProyektor;
const deleteProyektor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { kode_proyektor } = req.params;
    try {
        yield prisma.proyektor.delete({ where: { kode_proyektor } });
        res.json({ message: 'proyektor berhasil dihapus' });
    }
    catch (err) {
        res.status(404).json({ error: 'Gagal hapus, Proyektor tidak ditemukan' });
    }
});
exports.deleteProyektor = deleteProyektor;

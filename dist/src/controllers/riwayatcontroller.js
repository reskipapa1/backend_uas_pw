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
exports.getAllRiwayat = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllRiwayat = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const riwayat = yield prisma.transaksi.findMany({
            include: {
                kegiatan: true,
                proyektor: true,
                penanggung_jawab: true,
            },
        });
        const formatted = riwayat.map(item => {
            var _a, _b, _c;
            return ({
                kode_transaksi: item.kode_transaksi,
                kode_proyektor: item.kode_proyektor,
                nama: (_a = item.penanggung_jawab) === null || _a === void 0 ? void 0 : _a.nama,
                kegiatan: (_b = item.kegiatan) === null || _b === void 0 ? void 0 : _b.kegiatan,
                waktu: (_c = item.kegiatan) === null || _c === void 0 ? void 0 : _c.waktu,
                waktu_dikembalikan: item.waktu_dikembalikan,
            });
        });
        res.json(formatted);
    }
    catch (error) {
        console.error('Error fetching riwayat:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAllRiwayat = getAllRiwayat;

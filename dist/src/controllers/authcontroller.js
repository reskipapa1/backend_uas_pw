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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../utils/jwt");
const prisma = new client_1.PrismaClient();
// Tanpa Promise<Response>
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // Validasi input
    if (!name || !email || !password) {
        res.status(400).json({ error: "Semua field wajib diisi" });
        return;
    }
    try {
        const existingUser = yield prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: "Email sudah terdaftar" });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: client_1.Role.USER, // default role
            },
        });
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: (0, jwt_1.generateToken)(user.id, user.role),
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: "Registrasi gagal" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Validasi input
    if (!email || !password) {
        res.status(400).json({ error: "Email dan password wajib diisi" });
        return;
    }
    try {
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(404).json({ error: "User tidak ditemukan" });
            return;
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Password salah" });
            return;
        }
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: (0, jwt_1.generateToken)(user.id, user.role),
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: "Login gagal" });
    }
});
exports.login = login;

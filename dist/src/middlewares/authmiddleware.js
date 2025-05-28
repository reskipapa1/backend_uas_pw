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
exports.authorizeRole = exports.protect = void 0;
const jwt_1 = require("../utils/jwt");
const ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
};
// Middleware autentikasi JWT
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        res.status(401).json({ error: "Tidak ada token, akses ditolak" });
        return;
    }
    // Verifikasi format token
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        res.status(401).json({ error: "Format token salah" });
        return;
    }
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.User = { id: decoded.id, role: decoded.role };
        console.log('User role:', (_b = req.User) === null || _b === void 0 ? void 0 : _b.role);
        next();
    }
    catch (error) {
        res.status(401).json({ error: "Token tidak valid" });
        return;
    }
});
exports.protect = protect;
// Middleware otorisasi role
const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.User || !roles.includes(req.User.role)) {
            res.status(403).json({ error: "Akses ditolak. Tidak memiliki izin." });
            return;
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;

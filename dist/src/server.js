"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
require("./database");
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(cors_1.default());
app.listen(PORT, HOST);

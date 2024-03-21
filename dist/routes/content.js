"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    try {
        const { id } = req.body;
        res.json(id);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;

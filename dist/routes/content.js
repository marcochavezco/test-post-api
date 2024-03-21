"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    try {
        const content = req.body;
        const idList = content.map((template) => {
            const { id } = template;
            return id;
        });
        res.send(idList);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;

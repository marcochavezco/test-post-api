"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const content_1 = __importDefault(require("./routes/content"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 8080;
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!');
    res.send('Pong');
});
app.use('/', content_1.default);
app.listen(port, () => {
    console.log(`Server is on post ${port}`);
});

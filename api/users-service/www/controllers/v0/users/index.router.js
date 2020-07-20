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
const express_1 = require("express");
const user_router_1 = require("./routes/user.router");
const router = express_1.Router();
router.use('/users', user_router_1.UserRouter);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('users feed');
    res.send(`users v0 feed`);
}));
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map
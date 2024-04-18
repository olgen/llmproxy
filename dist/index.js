"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const llmProxy = (0, express_1.default)();
// Configuration
const port = process.env.PORT || 5000;
const llmUrl = "https://api.openai.com";
llmProxy.use("/", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: llmUrl,
    changeOrigin: true,
    headers: {
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
    },
}));
llmProxy.listen(port, () => {
    console.log(`Started Proxy at:${port}`);
});
//# sourceMappingURL=index.js.map
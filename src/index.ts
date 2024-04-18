import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import dotenv from "dotenv";
dotenv.config();

const llmProxy = express();
// Configuration
const port = process.env.PORT || 5000;
const llmUrl = "https://api.openai.com";

llmProxy.use(
  "/",
  createProxyMiddleware({
    target: llmUrl,
    changeOrigin: true,
    headers: {
      Authorization: "Bearer " + process.env.OPENAI_API_KEY,
    },
  })
);

llmProxy.listen(port, () => {
  console.log(`Started Proxy at:${port}`);
});

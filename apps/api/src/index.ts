import express from "express";

const app = express();

app.get("/health", (_req, res) => {
    res.json({status: "ok"});
}) 

const PORT = 3000;
app.listen(PORT, () => {
    console.log("API rodando em http://localhost:" + PORT);
})
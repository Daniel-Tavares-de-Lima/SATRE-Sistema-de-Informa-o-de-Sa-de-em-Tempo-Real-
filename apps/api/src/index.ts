import express from "express";
import { MockProvider } from "./providers/MockProvider";

const app = express();
const provider = new MockProvider();

app.get("/health", (_req, res) => {
    res.json({status: "ok"});
}) 

app.get("/units", async (_req, res) =>{
    const units = await provider.getUnits();
    res.json(units);
});

app.get("/units/:id", async (req, res) => {
    const unit = await provider.getUnitById(req.params.id);
    if(!unit){
        return res.status(404).json({error: "Unit not found"});
    }
    res.json(unit);
});   

const PORT = 3000;
app.listen(PORT, () => {
    console.log("API rodando em http://localhost:" + PORT);
})
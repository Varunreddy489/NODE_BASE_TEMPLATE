import express from "express";

import { apiRoutes } from "./routes/index.js";
import { PORT,logger } from "./config/index.js";

const app=express();

app.use('/api',apiRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log("Jai Shree Ram");
    logger.info(`Server is running on port ${PORT}`)
}) 


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import db from './src/config/db.js';
import logger from './src/config/logger.js';
import schoolRoute from './src/routes/schoolRoute.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use((req, res, next) => {
  logger.info(`Recieved ${req.method} request to ${req.url}`);
  if (req.body) {
    const { password, ...bodyToLog } = req.body;
    logger.info(`Request body: ${JSON.stringify(bodyToLog)}`);
  }
  next();
});

app.use('/api',schoolRoute);

// app.use('/', (req, res) => {
//     res.send("Hello root amogh");
//     console.log('Hello from Amogh');
// });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});



process.on("unhandledRejection", (reason, promise) => {
  logger.error(
    `Unhandled Rejection at: ${promise} reason: ${
      typeof reason === "object" ? JSON.stringify(reason) : String(reason)
    }`
  );
});
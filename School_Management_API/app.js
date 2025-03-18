import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './src/config/db.js';
import schoolRoute from './src/routes/schoolRoute.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use('/api',schoolRoute);

// app.use('/', (req, res) => {
//     res.send("Hello root amogh");
//     console.log('Hello from Amogh');
// });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});

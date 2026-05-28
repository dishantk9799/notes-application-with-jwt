import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
dotenv.config();

const port = process.env.PORT || 3003;

connectDB();

app.listen(port, () => {
    console.log(`✅ Server is connnected on: http://localhost/${port}`);
});
import app from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`✅ Server is connnected on: http://localhost/${port}`);
});
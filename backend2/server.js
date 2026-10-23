import express from 'express'
import { mongoConnect } from './configuration/mongoConnect.js';
import { userRoutes } from './routes/userRoutes.js';

const app = express();
app.use(express.json())
app.use("/app", userRoutes);
mongoConnect()
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

/*
src->component, assest, app.jsx

*/
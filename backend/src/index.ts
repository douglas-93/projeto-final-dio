import express from "express";
import contactRouter from "./routes/contact-route";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(contactRouter);

app.listen(5000, () => {
    console.log("Escutando em http://localhost:5000");
});

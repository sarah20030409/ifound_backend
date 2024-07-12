import express, { Application, Response, Request } from "express";
import dotenv from "dotenv"
import morgan from "morgan"
dotenv.config();
const app: Application = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());

console.log(`Server is Fire at http://localhost:${port}`);

app.listen(port, () => {
    console.log(`Start To listen port ${port}`);
})

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello This is IFoundApi, checkout /api To see the document.");
})

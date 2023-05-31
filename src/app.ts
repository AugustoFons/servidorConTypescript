import express, { Request, Response } from "express";
const port: number = 3000;
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("<h4>Servidor ejecutandose con typescript</h4>")
})

app.listen(port, ()=>console.log(`La aplicacion se esta ejecutando en http://localhost:${port}`))
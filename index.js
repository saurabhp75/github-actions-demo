import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => res.json({ msg: "Hello from the server" }))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
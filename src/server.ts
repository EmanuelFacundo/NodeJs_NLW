import express from 'express'

const app = express()

app.get("/", (req, res) => {
  return res.json({ 
    message: "Ola Node"
  })
})

app.post("/", (req, res) => {
  return res.json({
    message: "método post acessado com sucesso"
  })
})

app.listen(4040, () => console.log("Server is running on port 4040"))
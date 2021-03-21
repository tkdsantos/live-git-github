const { response } = require("express")
const express = require("express")

const app = express()

app.get("/teste", (req, res) => {
  return  res.json({ Hello: "COURSES-PAGES"})
})

app.listen(3333)
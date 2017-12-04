const express       = require("express")
const hbs           = require("express-handlebars")

const candidates    = require("./controllers/candidates")

const app           = express()

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}))

app.use("/assets", express.static("public"))

app.get("/", (req, res) => {
  res.render("app-welcome")
})

app.use("/candidates", candidates)

app.listen(app.get("port"), () => {
  console.log("It's aliiive!")
})

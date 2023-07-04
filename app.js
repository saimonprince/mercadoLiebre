//REQUERIMIENTO EXPRESS Y PATH
const express = require("express");
const path = require("path");

const app = express();


//RUTAS ESTATICAS
const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));

//SERVIDOR CORRIENDO
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor corriendo correctamente en el puerto " + port)
);

//HOME
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

//REGISTER
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

//LOGIN
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
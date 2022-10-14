const express = require('express')
const mysql = require('mysql2')
let app = express()

let bodyParser = require('body-parser');
const PORT = process.env.PORT || 7362;
let con = mysql.createConnection({

    host: 'containers-us-west-81.railway.app',
    user: 'root',
    password:'pXLJdtPRuWcPAY4lUqzQ',
    database:'railway',
 })

con.connect()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.post('/agregarMob',(req,res)=>{
    let nombre = req.body.nombreMob
    let tipo = req.body.tipoMob
    let vida = req.body.vidaMob

    con.query('insert into estadisticas (nombre,tipo,vida) values("'+nombre+'","'+tipo+'","'+vida+'")',(err,respuesta,fields)=>{
        return res.send(`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
            <title>Crud node</title>
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700&amp;display=swap">
            <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
        </head>
        
        <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="77">
            <nav class="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
                <div class="container"><a class="navbar-brand" href="#">Crud node</a><button data-bs-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item nav-link"><a class="nav-link active" href="index.html">Agregar</a></li>
                        <li class="nav-item nav-link"><a class="nav-link" href="consultar.html">Consultar</a></li>
                        <li class="nav-item nav-link"><a class="nav-link" href="editar.html">editar</a></li>
                        <li class="nav-item nav-link"><a class="nav-link" href="eliminar.html">Eliminar</a></li>
                        </ul>
                    </div><a href="#contact">eliminar</a>
                </div>
            </nav>
            <header class="masthead" style="background-image: url('assets/img/minecraftFondo.jpg');">
                <div class="intro-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h1 class="brand-heading">Mobs de minecraft</h1>
                                <p class="intro-text"></p>
                            </div>
                        </div>
                    </div>
                    <form action="/agregarMob" method="post">
                    <label class="form-label">Nombre del mob:&nbsp;</label><input type="text" name="nombreMob" placeholder="Escribe el nombre" onkeypress="return validarn(event)">
                    <br>
                    <label class="form-label">Tipo de mob:&nbsp;</label><input type="text" name="tipoMob" placeholder="Pasivo u Hostil" onkeypress="return validarn(event)">
                    <br><label class="form-label">Vida del mob:&nbsp;</label><input type="text" name="vidaMob" placeholder="Vida del mob" onkeypress="return validarn(event)">
                    <br><input class="btn btn-primary" type="submit" value="agregarMob">
                    </form>
        
                </div>
            </header>
            <div class="map-clean"></div>
            <footer>
                <div class="container text-center">
                    <p>Gómez Herrera Axel&nbsp; &nbsp; &nbsp; &nbsp;5IV7</p>
                </div>
            </footer>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/grayscale.js"></script>
            <script src="assets/validacion.js"></script>
        </body>
        
        </html>`)
    })
})

app.post('/eliminarMob',(req,res)=>{
    let nombreE = req.body.nombreE;
    con.query('delete from estadisticas where estadisticas.nombre = "'+nombreE+'"',(err,respuesta,fields)=>{
        res.send(`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
            <title>Eliminar</title>
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700&amp;display=swap">
            <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
        </head>
        
        <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="77">
            <nav class="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
                <div class="container"><a class="navbar-brand" href="#">Crud node</a><button data-bs-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item nav-link"><a class="nav-link active" href="index.html">Agregar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="consultar.html">Consultar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="editar.html">editar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="eliminar.html">Eliminar</a></li>
                        </ul>
                </div>
            </nav>
            <header class="masthead" style="background-image: url('assets/img/minecraftFondo.jpg');">
                <div class="intro-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h1 class="brand-heading">Mobs de minecraft</h1>
                                <p class="intro-text"></p>
                            </div>
                        </div>
                    </div>
                    <form action="/eliminarMob" method="post">
                    <label class="form-label">Eliminar mob:&nbsp;</label>
                    <input type="text" name="nombreE" placeholder="Nombre del mob" onkeypress="return validarn(event)"><br>
                    <input class="btn btn-primary" type="submit" value="Eliminar mob">
                    </form>
                </div>
            </header>
            <div class="map-clean"></div>
            <footer>
                <div class="container text-center">
                    <p>Gómez Herrera Axel&nbsp; &nbsp; &nbsp; &nbsp;5IV7</p>
                </div>
            </footer>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/grayscale.js"></script>
            <script src="assets/validacion.js"></script>
        </body>
        
        </html>`)
    })
})

app.post('/actualizarMob',(req,res)=>{
    let idA = req.body.idA;
    let nombreA = req.body.nombreA;
    let tipoA = req.body.tipoA;
    let vidaA = req.body.vidaA;

    con.query('update estadisticas set estadisticas.nombre = "'+nombreA+'",estadisticas.tipo = "'+tipoA+'",estadisticas.vida = "'+vidaA+'" where estadisticas.id = "'+idA+'"',(err,respuesta,fields)=>{
        res.send(`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
            <title>Editar mob</title>
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700&amp;display=swap">
            <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
        </head>
        
        <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="77">
            <nav class="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
                <div class="container"><a class="navbar-brand" href="#">Crud node</a><button data-bs-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item nav-link"><a class="nav-link active" href="index.html">Agregar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="consultar.html">Consultar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="editar.html">editar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="eliminar.html">Eliminar</a></li>
                        </ul>
                </div>
            </nav>
            <header class="masthead" style="background-image: url('assets/img/minecraftFondo2.jpg');">
                <div class="intro-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h1 class="brand-heading">Editar</h1>
                                <p class="intro-text"></p>
                            </div>
                        </div>
                    </div>
                    <form action="/actualizarMob">
                    <label class="form-label">Editar mob:&nbsp;</label><br>
                    <input type="text" name="idA" placeholder="Id del mob a Actualizar" onkeypress="return validarnn(event)"><br><br>
                    <input type="text" name="nombreA" placeholder="Nuevo nombre" onkeypress="return validarn(event)"><br><br>
                    <input type="text" name="tipoA" placeholder="Nuevo tipo" onkeypress="return validarn(event)"><br><br>
                    <input type="text" name="vidaA" placeholder="Nueva vida" onkeypress="return validarnn(event)"><br><br>
                    <input class="btn btn-primary" type="submit" value="Editar mob">
                    </form>
                </div>
            </header>
            <div class="map-clean"></div>
            <footer>
                <div class="container text-center">
                    <p>Gómez Herrera Axel&nbsp; &nbsp; &nbsp; &nbsp;5IV7</p>
                </div>
            </footer>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/grayscale.js"></script>
            <script src="assets/validacion.js"></script>
        </body>
        
        </html>`)
    })
})

app.post('/consultarMobs',(req,res)=>{
    let id = req.body.id;
    con.query('select * from estadisticas ',(err,respuesta,fields)=>{

        let userHTML = ""
        let i = 0

        respuesta.forEach((user) =>{
            i++
            userHTML+=`<tr>
            <td>${i}</td>
            <td>${user.nombre}</td>
            <td>${user.tipo}</td>
            <td>${user.vida}</td>
            </tr>`
        })
        return res.send(`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
            <title>Consultar</title>
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700&amp;display=swap">
            <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
        </head>
        
        <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="77">
            <nav class="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
                <div class="container"><a class="navbar-brand" href="#">Crud node</a><button data-bs-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item nav-link"><a class="nav-link active" href="index.html">Agregar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="consultar.html">Consultar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="editar.html">editar</a></li>
                            <li class="nav-item nav-link"><a class="nav-link" href="eliminar.html">Eliminar</a></li>
                        </ul>
                </div>
            </nav>
            <header class="masthead" style="background-image: url('assets/img/minecraftFondo2.jpg');">
                <div class="intro-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h1 class="brand-heading">Mobs</h1><br>
                                <form action="/consultarMobs">
                                    <input class="btn btn-primary" type="submit" value="Consultar Mobs">
                                    <br><br>
                                </form>
                                <table>
                                    <tr>
                                        <td>Id//</td>
                                        <td>Nombre del mob//</td>
                                        <td>Tipo de mob//</td>
                                        <td>Vida//</td>
                                    </tr>
                                    ${userHTML}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="map-clean"></div>
            <footer>
                <div class="container text-center">
                    <p>Gómez Herrera Axel&nbsp; &nbsp; &nbsp; &nbsp;5IV7</p>
                </div>
            </footer>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/grayscale.js"></script>
        </body>
        
        </html>`);
        
    })
})

app.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto 7362")
})
const express = require("express");
const app = express();
const PORT = 3000;

//1. Numero par o impar
    app.get("/par/:numero", (req, res) => {

    const nombre = "Yeraldin Navarro Bernal";
    const numero = Number(req.params.numero);

    if (numero % 2 == 0) {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>${numero} es un numero par</h2>
        `);
    } else {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>${numero} es un numero impar</h2>
        `);
    }
});

// 2. Mayor o menor de edad
    app.get("/edad/:edad", (req, res) => {

    const nombre = "Yeraldin Navarro Bernal";
    const edad = Number(req.params.edad);

    if (edad >= 18) {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1"> ${nombre}</p>
            <h2>Eres mayor de edad</h2>
        `);
    } else {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1"> ${nombre}</p>
            <h2>Eres menor de edad</h2>
        `);
    }
});

// 3.Calculadora
    app.get("/calculadora/:operacion/:a/:b", (req, res) => {

    const nombre = "Yeraldin Navarro Bernal";
    const operacion =req.params.operacion
    const a = Number(req.params.a);
    const b = Number(req.params.b);


    if (operacion == "suma") {
    res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2> Resultado: ${a+b}</h2>
        `);
    } if(operacion == "resta") {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2> Resultado: ${a-b}</h2>
        `);
    }if (operacion =="multiplicacion"){
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2> Resultado: ${a*b}</h2>
        `);
    }if(operacion == "division"){
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2> Resultado: ${a/b}</h2>
        `);
    } 
});

//4.Tabla de multiplicar
    app.get("/tabla/:numero", (req, res) => {
    const nombre = "Yeraldin Navarro Bernal";
    const numero =(req.params.numero);
  
    res.send(`
           <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <p> ${numero} x 1 =${numero * 1}</p>
            <p> ${numero} x 1 =${numero * 2}</p>
            <p> ${numero} x 1 =${numero * 3}</p>
            <p> ${numero} x 1 =${numero * 4}</p>
            <p> ${numero} x 1 =${numero * 5}</p>
            <p> ${numero} x 1 =${numero * 6}</p>
            <p> ${numero} x 1 =${numero * 7}</p>
            <p> ${numero} x 1 =${numero * 8}</p>
            <p> ${numero} x 1 =${numero * 9}</p>
            <p> ${numero} x 1 =${numero * 10}</p>
        `)
   
});

//5.Calificacion
app.get("/calificacion/:nota", (req, res) => {

    const nombre = "Yeraldin Navarro Bernal";
    const nota = Number(req.params.nota);

    if(nota >= 90){
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>Excelente</h2>
        `);

    } else if(nota >= 80){
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>Muy bien</h2>
        `);

    } else if(nota >= 70){
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>Aprobado</h2>
        `);

    } else {
        res.send(`
            <style>
            .p1{
                color:hotpink;
                background:lavenderBlush;
            }
            </style>

            <p class="p1">${nombre}</p>
            <h2>Reprobado</h2>
        `);
    }
});

app.listen(PORT,() => {  
console.log("Servidor iniciado en http://localhost:"+PORT);
});
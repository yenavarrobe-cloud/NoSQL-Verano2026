const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const PORT = 3000;
app.use(morgan("dev"));

app.get("/",(req, res) => {
    res.send("Hola Mundo");
});

mongoose.connect("mongodb://127.0.0.1:27017/netflix")
.then(()=>{
    console.log("Conectado correctamente a MongoDB");
})
.catch((error)=>{
    console.error("Error al conectar MongoDB:", error);
});
const alumnoSchema = new mongoose.Schema(
    {
        nombre: {type:String, required: true, trim: true},
        carrera: {type:String, required: true, trim: true},
        semestre: {type:Number, required: true, min: 1}
    },
    {
        timestamps: true
    }
);
const Alumno = mongoose.model("Alumno",alumnoSchema,"alumnos")

app.get("/alumnos",async(req,res)=>{
   try{
    const alumnos=await Alumno.find();
    res.json(alumnos);
   } catch (error) {
    res.status(500).json({
        mensaje:"Error al obtener los alumnos",
        error: error
    });
   }
});

app.get("/alumnos/:id",async (req,res)=>{
    try{
    const id=req.params.id
    const alumno= await Alumno.findById(id);
    if(!alumno){
        return res.status(404).json({
            mensaje:"Alumno no encontrado"
        })
    }
    res.json(alumno);
    }catch(error){
        res.status(500).json({
            mensaje:"Error al obtener alumno",
            error: error 
        });
    }
});

app.post("/alumnos",async(req,res)=>{
    try{
    const{nombre,carrera,semestre}=req.body;
    if(!nombre || !carrera || !semestre){
        return req. status(400).json({
            mensaje:"Faltan datos del alumno"
        });
    }
    const nuevoAlumno = new Alumno({
        nombre,carrera,semestre
    });
    const alumnoGuardado= await nuevoAlumno.save();
    res.json({
        mensaje:"Alumnos registrado correctamente",
        alumno:alumnoGuardado
    })
}catch(error){
        res.status(500).json({
            mensaje:"Error al guardar alumno",
            error: error 
        });
    }
});
///////////////////////////////////////
app.put("/alumnos/:id",async (req,res)=>{
    try{
        const id= req.params.id;
        console.log(id);
    const{nombre,carrera,semestre}=req.body;  

    if(!nombre || !carrera || !semestre){
        return req. status(404).json({
            mensaje:"Faltan datos del alumno"
        });
    }
    console.log(nombre);
    console.log(carrera);
    console.log(semestre);
    const alumnoActualizado = await Alumno.findByIdAndUpdate(
        id,
        { nombre,carrera,semestre },
        { new: true, runValidators: true }
     );
    
     if(!alumnoActualizado){
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        });
     }

      res.json({
        mensaje:"Alumnos actualizado correctamente",
        alumno:alumnoActualizado
    })
}catch(error){
        res.status(500).json({
            mensaje:"Error al actualizar alumno",
            error: error 
        });
    }
});

app.delete("/alumnos/:id",async (req,res)=>{
    try{
    const id=(req.params.id);
    const alumnoEliminado=await Alumno.findByIdAndDelete(
        id
    )
    if(!alumnoEliminado){
        return res.status(404).json({
            mensaje:"Alumno no encontrado"
        });
    }
    res.json({
        mensaje:"Alumno Eliminado correctamente",
        alumno:alumnoEliminado
    });
}catch(error){
        res.status(500).json({
            mensaje:"Error al eliminar alumno",
            error: error 
        });
    }
});

let alumnos =[
    {
        id: 1,
        nombre:"Yeraldin",
        carrera:"ISC",
        semestre:"7"
    },{
        id: 2,
        nombre:"Mileydy",
        carrera:"IM",
        semestre:"3"
    }
]



app.get("/mensaje",(req,res)=>{
    res.send("Mensaje desde Express");
});

app.get("/pagina",(req,res)=>{
    const nombre="Yeraldin"
    res.send(`
        <style>
        .p1{
            color:hotpink;
            background:lavenderBlush;
            }
        </style>
        <style>
        .p2{
            color:limegreen;
            background:honeydew;
            }
        </style>

        <h1 style ="color:skyblue;">Mi pagina Web</h1>
        <p class="p1">Creada con Express </p>
        <p class="p2">Hola ${nombre}</p>
        `);
});

app.get("/materias",(req,res)=>{
    res.json([
        {
            nombre:"NoSQL",
            hora:"8:00-11:00"
        },
        {
            nombre:"Arquitectura de Computadoras",
            hora:"15:00-18:00"
        }
])
});

app.get("/mensaje/:nombre",(req,res)=>{
    res.send(`Hola ${req.params.nombre}`);
});

app.get("/suma/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b= Number(req.params.b);
    res.send(`Resultado: ${a+b}`);
});

app.get("/multiplicar/:a/:b",(req,res)=>{
    const a = Number(req.params.a);
    const b= Number(req.params.b);
    res.send(`Resultado: ${a*b}`);
});
app.get("/aleatorio",(req,res)=>{
    const numero =  Math.floor( Math.random() * 100 )+1
    res.send(`Numero generado: ${numero}`)
});

app.get("/alumno",(req,res)=>{
    res.json({
        nombre:"Yeraldin",
        carrera:"ISC",
        semestre:7
    });
});

app.listen(PORT,() => {  
console.log("Servidor iniciado en http://localhost:"+PORT);
});
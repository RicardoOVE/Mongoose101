const Estudiante = require("../models/estudiante.model");

//Regresa lista de objetos/documentos Estudiante
module.exports.muestraEstudiantes = (req, res) => {
    Estudiante.find()
        .then(todosEstudiantes => res.json({estudiantes: todosEstudiantes}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

//Me regresa solo un documento de estudiante en base al ID que mandemos en la URL
module.exports.muestraUnEstudiante = (req, res) => {
    Estudiante.findOne({_id: req.params.id})
        .then(unEstudiante => res.json({estudiante: unEstudiante}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

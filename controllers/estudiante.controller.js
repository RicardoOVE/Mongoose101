const Estudiante = require('../models/estudiante.model')

module.exports.muestraEstudiantes = (req, res) => {
    Estudiante.find()
        .then(todosEstudiantes => res.json({estudiantes: estudiantes}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}
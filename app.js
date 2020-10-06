let personas = [
    {
        nombre: "Gerardo Damián",
        apellido: "Monti",
    },
    {
        nombre: "Romina",
        apellido: "Rios",
    },
    {
        nombre: "Blanquito",
        apellido: "Negro",
    },
    {
        nombre: "Mona",
        apellido: "Tricolor",
    },
]

function sumarPersona (nombre, apellido) {
    let personaNueva = {
        nombre: nombre,
        apellido: apellido,
    };
    personas.push(personaNueva);
    console.log(personas)
}


sumarPersona("Juan", "Perez");
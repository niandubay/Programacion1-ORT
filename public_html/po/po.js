// po

function Persona(_nombre, _edad, _hobbies) {
    this.nombre = _nombre;
    this.edad = _edad;
    this.hobbies = _hobbies;

    this.cumplirAnios = function () {
        this.edad++;
        alert("Feliz cumple, ahora tenés " + this.edad);
    };
    
    this.obtenerPrimerHobbie = function () {
        return this.hobbies[0];
    };
    
    this.agregarHobbie = function(_hobbie){
        this.hobbies.push(_hobbie);
    };
}

var unaPersona = new Persona("Santiago", 22, ["fútbol", "natacion"]);
var otraPersona = new Persona("Gonzalo", 28, ["basketball"]);

unaPersona.cumplirAnios();

var primerHobbieDeUnaPersona = unaPersona.obtenerPrimerHobbie();

otraPersona.agregarHobbie("esgrima");
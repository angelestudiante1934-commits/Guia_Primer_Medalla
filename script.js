let paso = 0

const Casa = document.getElementById("Casa")
const PuebP = document.getElementById("Pueblo_Paleta")
const Lab = document.getElementById("Laboratorio")
const R1 = document.getElementById("Ruta_1")
const CVer = document.getElementById("Ciudad_Verde")
const R2 = document.getElementById("Ruta_2")
const Bosq = document.getElementById("Bosque_Verde")
const CPla = document.getElementById("Ciudad_Plateada")
const Fin = document.getElementById("Video")
const Izq = document.getElementById("Anterior")
const Der = document.getElementById("Siguiente")
const Ini = document.getElementById("Inicio_Guia")

const ACasa = document.getElementById("ACasa")
const APuebP = document.getElementById("APuebP")
const ALab = document.getElementById("ALab")
const AR1 = document.getElementById("AR1")
const ACVer = document.getElementById("ACVer")
const AR2 = document.getElementById("AR2")
const ABosq = document.getElementById("ABosq")
const ACPla = document.getElementById("ACPla")
const AFin = document.getElementById("AFin")

const Resultado = document.getElementById("Resultado")
const BCon = document.getElementById("Boton_Consulta")

const Formulario = document.getElementById("Formulario");
const Usuario = document.getElementById("Usuario");
const Contrasena = document.getElementById("Contrasena");
const Correo = document.getElementById("Correo");
const Comentario = document.getElementById("Comentario");

let consejos = [
    "Brock es el lider del primer gimansio y su especialidad son los tipo Roca." ,
    "Planta es muy efectivo contra Roca,Tierra y Agua." ,
    "Bulbasaur es tipo Planta y Veneno." ,
    "Tu rival siempre elegirá el inicial perfecto contra el tuyo." ,
    "Algunas pokeball son mas efectivas que otras."
] 

ACasa.addEventListener("click", () => {
    mostrarPaso()
})

APuebP.addEventListener("click", () => {
    paso = 1
    mostrarPaso()
})

ALab.addEventListener("click", () => {
    paso = 2
    mostrarPaso()
})

AR1.addEventListener("click", () => {
    paso = 3
    mostrarPaso()
})

ACVer.addEventListener("click", () => {
    paso = 4
    mostrarPaso()
})

AR2.addEventListener("click", () => {
    paso = 5
    mostrarPaso()
})

ABosq.addEventListener("click", () => {
    paso = 6
    mostrarPaso()
})

ACPla.addEventListener("click", () => {
    paso = 7
    mostrarPaso()
})

AFin.addEventListener("click", () => {
    paso = 8
    mostrarPaso()
})

Ini.addEventListener("mouseover", () => {
    Ini.style.cursor = "pointer"
})
Ini.addEventListener("mouseout", () => {
    Ini.style.cursor = "default"
})

Izq.addEventListener("mouseover", () => {
    Izq.style.cursor = "pointer"
    Izq.style.scale = "1.25"
})
Izq.addEventListener("mouseout", () => {
    Izq.style.cursor = "default"
    Izq.style.scale = "1"
})

Der.addEventListener("mouseover", () => {
    Der.style.cursor = "pointer"
    Der.style.scale = "1.25"
})
Der.addEventListener("mouseout", () => {
    Der.style.cursor = "default"
    Der.style.scale = "1"
})

Ini.addEventListener("click", () => {
    mostrarPaso()
})

Izq.addEventListener("click", () => {
    paso--
    mostrarPaso()
})

Der.addEventListener("click", () => {
    paso++
    mostrarPaso()
})

function mostrarPaso(){
    switch(paso){

        case 0:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "none"
            Casa.style.display = "inline"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;

        case 1:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "inline"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;

        case 2:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "inline"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;

        case 3:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "inline"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;

        case 4:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "inline"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;
        
        case 5:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "inline"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;
        
        case 6:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "inline"
            CPla.style.display = "none"
            Fin.style.display = "none"
            break;
        
        case 7:
            Ini.style.display = "none"
            Der.style.display = "inline"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "inline"
            Fin.style.display = "none"
            break;
        case 8:
            Ini.style.display = "none"
            Der.style.display = "none"
            Izq.style.display = "inline"
            Casa.style.display = "none"
            PuebP.style.display = "none"
            Lab.style.display = "none"
            R1.style.display = "none"
            CVer.style.display = "none"
            R2.style.display = "none"
            Bosq.style.display = "none"
            CPla.style.display = "none"
            Fin.style.display = "inline"
            break;
    }

}

BCon.addEventListener("click", () => {
    mostrarConsulta()
})
BCon.addEventListener("mouseover", () => {
    BCon.style.cursor = "pointer"
    BCon.style.textDecoration = "underline"
})
BCon.addEventListener("mouseout", () => {
    BCon.style.cursor = "default"
    BCon.style.textDecoration = "none"
})

function mostrarConsulta() {
    let rand
    rand = random()
    Resultado.textContent = consejos[rand]
}

function random () {
    let azar
    azar = Math.floor(Math.random() * 5) // genera un valor aleatorio entre 0 y 4, con el Math.random se genera un numero entre 0 y 0.99, con el * 5 pasa a ser entre 0 y 4.9, con el floor elimina los decimales y lo dejaria entre 0 y 4
    return azar
}

Formulario.addEventListener("submit", function(event){
    try{
        let vectorMayuscula = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","X","Y","W","Z"]
        let vectorNumero = ["1","2","3","4","5","6","7","8","9","0"]
        let vectorEspeciales = ["[","!","@","#","$","%","^","&","*","(",")",",",".","?",":","{","}","|","<",">","_","\\","-","+","=","]"]
        let correosvalidos = ["@gmail.com","@hotmail.com","@outlook.com","@yahoo.com"]
        let pass = Contrasena.value
        let mail = Correo.value.trim()
        if(Usuario.value.trim().length < 1 || Usuario.value.trim().length > 15){
            throw "El usuario debe tener entre 1 y 15 caracteres."
        }
        if(pass.length < 5 || pass.length > 10) {
            throw "La contraseña debe tener entre 5 y 10 caracteres."
        }
        if(!buscarCaracter(pass, vectorMayuscula)){
            throw "La contraseña debe contener al menos una letra mayúscula."
        }
        if(!buscarCaracter(pass, vectorNumero)){
            throw "La contraseña debe contener al menos un número."
        }
        if(!buscarCaracter(pass, vectorEspeciales)){
            throw "La contraseña debe contener al menos un carácter especial."
        }
        if(!validarCorreo(mail, correosvalidos)){
            throw "Ingrese un correo electrónico válido."
        }
        if(Comentario.value.trim() == "") {
            throw "Debe escribir un comentario."
        }
        alert("Formulario enviado correctamente.")
    }catch(e) {
        alert(e);
    }
})
function buscarCaracter(aux, vector){
    let i = 0
    do{
        let j = 0
        do{
            if(aux[i] == vector[j]){
                return true
            }
            j++
        }while(j < vector.length)
        i++
    }while(i < aux.length)
    return false
}
function validarCorreo(correo, correosvalidos){
    let i = 0
    do{
        if(correo.endsWith(correosvalidos[i])){
            return true
        }
        i++
    }while(i < correosvalidos.length)
    return false
}
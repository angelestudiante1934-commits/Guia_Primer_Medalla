let paso = 0 //Se crea una variable global

/*Creacion de constantes que contienen los ID de los article de los diferentes pasos*/ 
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

/*Creacion de constantes que contienen los ID de los enlaces a los article de los diferentes pasos*/ 
const ACasa = document.getElementById("ACasa")
const APuebP = document.getElementById("APuebP")
const ALab = document.getElementById("ALab")
const AR1 = document.getElementById("AR1")
const ACVer = document.getElementById("ACVer")
const AR2 = document.getElementById("AR2")
const ABosq = document.getElementById("ABosq")
const ACPla = document.getElementById("ACPla")
const AFin = document.getElementById("AFin")

/*Creacion de constantes que contienen los ID de los botones y boxes de la caja de consejos*/
const Resultado = document.getElementById("Resultado")
const BCon = document.getElementById("Boton_Consulta")

/*Creacion de constantes que contienen los ID de los elementos del formulario*/ 
const Formulario = document.getElementById("Formulario");
const Usuario = document.getElementById("Usuario");
const Contrasena = document.getElementById("Contrasena");
const Correo = document.getElementById("Correo");
const Comentario = document.getElementById("Comentario");

/*Creacion de un array que contiene strings que hacen referencia a distintos consejos*/ 
let consejos = [
    "Brock es el lider del primer gimansio y su especialidad son los tipo Roca." ,
    "Planta es muy efectivo contra Roca,Tierra y Agua." ,
    "Bulbasaur es tipo Planta y Veneno." ,
    "Tu rival siempre elegirá el inicial perfecto contra el tuyo." ,
    "Algunas pokeball son mas efectivas que otras."
] 

/*Eventos "click" para los distintos enlaces*/
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

/*Evento "mouseover" y "mouseout" para los botones dentro del box de los pasos progresivos*/
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
/*Eventoc "click" para los botones dentro del box de los pasos progresivos*/
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
/*La siguiente funcion  llamada en los botones Ini,Izq,Der y los distintos enlaces, 
modifican los display de los distintos article que muestran los pasos*/
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

/*Evento "click" para el boton de consulta llamando a la funcion mostrarConsulta()*/
BCon.addEventListener("click", () => {
    mostrarConsulta()
})

/*Evento "mouseover" y "mouseout" del BCon*/
BCon.addEventListener("mouseover", () => {
    BCon.style.cursor = "pointer"
    BCon.style.textDecoration = "underline"
})
BCon.addEventListener("mouseout", () => {
    BCon.style.cursor = "default"
    BCon.style.textDecoration = "none"
})

/*Funcion para mostrar la consulta*/ 
function mostrarConsulta() {
    let rand
    rand = random()//se crea una variable que toma el valor que retorna la funcion random()
    Resultado.textContent = consejos[rand]//se modifica el texto dentro del box Resultado
}

function random () {
    let azar
    azar = Math.floor(Math.random() * 5) // genera un valor aleatorio entre 0 y 4, con el Math.random se genera un numero entre 0 y 0.99, con el * 5 pasa a ser entre 0 y 4.9, con el floor elimina los decimales y lo dejaria entre 0 y 4
    return azar
}

/*Funcion/Evento que se ejecuta cuando se detecta el submit en el Formulario*/
Formulario.addEventListener("submit", function(event){
    try{
        let vectorMayuscula = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","X","Y","W","Z"]//Se crea un array que contiene todas las mayusculas
        let vectorNumero = ["1","2","3","4","5","6","7","8","9","0"]//Se crea un array que contiene todos los numeros enteros de 0-9
        let vectorEspeciales = ["[","!","@","#","$","%","^","&","*","(",")",",",".","?",":","{","}","|","<",">","_","\\","-","+","=","]"]//Se crea un array que contiene todos los caracteres especiales
        let correosvalidos = ["@gmail.com","@hotmail.com","@outlook.com","@yahoo.com"]//Se crea un array que contiene los correos/dominios habilitados
        let pass = Contrasena.value//Se obtiene lo que se escribio en Contrasena
        let mail = Correo.value.trim()//Se obtiene lo que se escribio en mail quitando los espacios innecesarios
        if(Usuario.value.trim().length < 1 || Usuario.value.trim().length > 15){
            throw "El usuario debe tener entre 1 y 15 caracteres."
        }//Verifica la cantidad de caracteres en Usuario(quitando espacios con trim)
        if(pass.length < 5 || pass.length > 10) {
            throw "La contraseña debe tener entre 5 y 10 caracteres."
        }//Verifica la cantidad de caracteres en pass
        if(!buscarCaracter(pass, vectorMayuscula)){
            throw "La contraseña debe contener al menos una letra mayúscula."
        }//Se verifica el valor obtenido con una funcion, el "!"" lo vuelve el opuesto del valor obtenido
        if(!buscarCaracter(pass, vectorNumero)){
            throw "La contraseña debe contener al menos un número."
        }//Se verifica el valor obtenido con una funcion, el "!"" lo vuelve el opuesto del valor obtenido
        if(!buscarCaracter(pass, vectorEspeciales)){
            throw "La contraseña debe contener al menos un carácter especial."
        }//Se verifica el valor obtenido con una funcion, el "!"" lo vuelve el opuesto del valor obtenido
        if(!validarCorreo(mail, correosvalidos)){
            throw "Ingrese un correo electrónico válido."
        }//Se verifica el valor obtenido con una funcion, el "!"" lo vuelve el opuesto del valor obtenido
        if(Comentario.value.trim() == "") {
            throw "Debe escribir un comentario."
        }//Se verifica que el Comentario este vacio (para usar throw del error)
        alert("Formulario enviado correctamente.")//En caso de que no ese ejecuto ningun Throw, se ejecuta el Alert y se "carga" el form
    }catch(e) {
        alert(e)//Error
    }
})

/*Funcion reutilizada que realiza una busqueda para comprobar que se encuentre almenos un caracter buscado*/
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

/*Funcion que valida el correo al revisar la terminacion del parametro "correo" y compararlo con los elementso de correosvalidos[]*/
function validarCorreo(correo, correosvalidos){
    let i = 0
    do{
        if(correo.endsWith(correosvalidos[i])){ //En esta sentencia realiza una comparacion con el texto que se encuentra en la posicion i del array correosvalidos[], en caso de que la comparacion sea correcta se retorna "1"/"True"
            return true
        }
        i++
    }while(i < correosvalidos.length)
    return false
}

//Nota: Para entender el funcionamiento de las funciones busqueda dentro de los distintos elementos de form 
//hay que recordar que el if solo separa dos caminos por un True y un False,
//si el resultado obtenido consta de un True y se hace la negacion/opuesto de este dara False, 
//por lo tanto se ira por el camino del no a pesar de que el valor "verdadero" sea True
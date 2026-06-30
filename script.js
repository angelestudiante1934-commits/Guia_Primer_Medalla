let paso = 0;

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
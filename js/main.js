
alert(" Bienvenidos!!! a Pet Shop:  Patitas Felices  \n Ingrese a continuación los datos de su mascota ")

let raza = prompt("Ingrese la raza de su mascota")
let edad = prompt("Ingrese la edad de su mascota")
let tamano = prompt("Ingrese el tamaño de su mascota")

function usuarioCliente(){

    
    let datosUsuarioCliente =("Raza ingresada: " + raza + "\n" + "Edad: " + edad + "\n" + "Tamaño: " + tamano)
    alert(datosUsuarioCliente)
    let editarDatos = prompt("Esta seguro de haber ingresado correctamente los datos?: 1-Si , 2-No")
    while (editarDatos){
        if(editarDatos == 1){
            alert("Sigamos con la eleccion del alimento para su mascota")
            alimentos()
            break;
        }else{
            alert("Volvamos a editar los datos de su mascota ")
            let raza = prompt("Ingrese la raza de su mascota")
            let edad = prompt("Ingrese la edad de su mascota")
            let tamano = prompt("Ingrese el tamaño de su mascota")
            let datosUsuarioCliente =("Raza ingresada: " + raza + "\n" + "Edad: " + edad + "\n" + "Tamaño: " + tamano)
            alert(datosUsuarioCliente)
            let editarDatos = prompt("Esta seguro de haber ingresado correctamente los datos?: 1-Si , 2-No")
            if (editarDatos == 1) {
                alert("Excelente, prosigamos con la eleccion de alimentos para su mascota")
                alimentos()
                break;
            }else{
                alert("Vuelva a ingresar correctamente los datos ");
                break;
            }
            
        }
    }

}


function alimentos(){
    
    let royalCanin = alert(" Royal Canin: x 10 kilos, $ 15.000")
    let proPlan = alert(" Pro-Plan: x 15 kilos, $ 17.000 ")
    let purina= alert(" Purina: x 20 kilos, $ 22.000 ")
    let comidaGatos = alert("Excellent gatos: x 5 kilos, $ 8.000") 

    let repetirOpciones = prompt("Desea ver nuestras opciones nuevamente?\n 1 - Si  \n 2 - No")
    while(repetirOpciones){
        if(repetirOpciones == 1){
            alert("Ok!, veamos nuevamente las opciones")
            let royalCanin = alert(" Royal Canin: x 10 kilos, $ 15.000")
            let proPlan = alert(" Pro-Plan: x 15 kilos, $ 17.000 ")
            let purina= alert(" Purina: x 20 kilos, $ 22.000 ")
            let comidaGatos = alert("Excellent gatos: x 5 kilos, $ 8.000") 
            let repetirOpcionesS = prompt("Desea continuar?: \n 1 - Si  \n 2 - No")
            if(repetirOpcionesS == 1){
                alert("Excelente, continuemos!")
                break;
            }else{
                alert("Lamentamos su decision; regresa pronto!")
                break;
            }
            
        }else{
            alert("Genial! prosigamos")
            break;
        }
    }

    let opcionesAlimentos = parseInt(prompt("Qué marca de alimento desea comprar para su mascota? Seleccione una opción: \n 1: Royal Canin \n 2: Pro-Plan \n 3: Purina \n 4: Excellent para Gatos"))
    switch (opcionesAlimentos){
        case 1:
            alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Royal Canin x 10 kilos a $ 15.000 ")
            break;    
        case 2:
            alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Pro-Plan x 15 kilos a $ 17.000 ")
            break;  
        case 3:
            alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Purina x 20 kilos a $ 22.000 ")
            break; 
        case 4:
            alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Excellent para gatos  x 5 kilos a $ 8.000")
            break;
        default:
            alert("La opción ingresada no es correcta \n Por favor vuelva a intentarlo.")
            let reintentar = prompt("Desea intentar nuevamente\n 1 - Si \n 2 - No")
            if(reintentar == 1){
                let opcionesAlimentos = parseInt(prompt("Qué marca de alimento desea comprar para su mascota? Seleccione una opción: \n 1: Royal Canin \n 2: Pro-Plan \n 3: Purina \n 4: Excellent para Gatos"))
                switch(opcionesAlimentos){
                    case 1:
                        alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Royal Canin x 10 kilos a $ 15.000 ")
                        break;    
                    case 2:
                        alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Pro-Plan x 15 kilos a $ 17.000 ")
                        break;
                    case 3:
                        alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Purina x 20 kilos a $ 22.000 ")
                        break; 
                    case 4:
                        alert(raza +" "+ tamano +" "+ edad + " "+ "eligió Excellent para gatos  x 5 kilos a $ 8.000")
                        break;
                    default:
                        alert("La opcion seleccionada no es correcta \n Vuelva a intentarlo!")
                        break;
                }       
            }else{
                alert("Lamentamos no poder ayudarte con tu compra!!! Vuelve a visitarnos pronto !!!")
                break;
            }
        break;    
    }  
}      

usuarioCliente()
alert("Gracias por visitar nuestra página")
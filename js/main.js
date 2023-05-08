
        let dineroDisponible = 3000;
        let precioCachorros = 250;
        let precioPerroAdulto = 400;
        let precioGatos = 320;
        let precioAccesorios = 2000;
        let precioOfertaMes = 180;
        let kilosComprados = 0;
        let opcion1 = 2;
        let opcion2 = 5;
        let opcion3 = 18;
        let opcion4 = 24;
        

        let continuarCompra = true;

        while (continuarCompra) {

        let producto = prompt("Seleccione el producto que desea comprar \n1-Cachorros\n2-Perro Adulto\n3- Gatos\n4-Accesorios\n5-Ofertas del mes");
        switch (producto) {

        case "1":
            console.log("Seleccionaste Cachorros");

            let cantidadKilos = prompt("¿Cuántos Kilos de comida desea comprar? \n1- 2 K, \n2- 5 K, \n3- 10 K, \n4- 20 K");

            let opcion1 = parseInt(prompt("Compraste" + opcion1 + "Kg"));
            break;
                
        
        case "2":
            console.log("Seleccionaste Perro adulto");
            cantidadKilos = prompt("¿Cuántos kilos de comida desea comprar?");
            break;
        
        case "3":
            console.log("Seleccionaste Gatos");
            cantidadKilos = prompt("¿Cuántos kilos de comida desea comprar?");
            break;
        
        case "4":
            console.log("Seleccionaste Accesorios");
            cantidadAccesorios = prompt("¿Cuántos accesorios deseas comprar?");
            break;
        
        case "5":
            console.log("Seleccionaste Ofertas del mes");
            seleccionOferta = prompt("¿Cuál oferta deseas elegir?");
            break;
        
        default:
            alert("El tipo de producto seleccionado no es válido");
        }
        } 

        /*let costoTotal = calcularCostoTotal(cantidadKilos, precioCachorros);

        function calcularCostoTotal(cantidadKilos, precioPorKilo) {
        return cantidadKilos * precioPorKilo;
        }

        if (costoTotal <= dineroDisponible) {
        dineroDisponible -= costoTotal;
        alert("Su compra fué realizada con éxito. Dinero disponible: " + dineroDisponible);
        } else {
        alert("No tiene dinero suficiente para realizar esta compra");
        }

        continuarCompra = confirm("¿Desea realizar otra compra?");

        if (!continuarCompra) {
        alert("Gracias por su compra");
        
        //Esto no va
        alert("compraste " + 2 +  " kg");

        } else if( kilosComprados===opcion2) {
        alert("compraste :" + 5  + " Kg");

        } else if( kilosComprados===opcion3) {
        alert("compraste " + 18 + " Kg");

        } else if( kilosComprados===opcion4) {
        alert("compraste " + 24  + " Kg");
        
        } else {
        alert("selecciona una opción correcta");
        }
        break;*/

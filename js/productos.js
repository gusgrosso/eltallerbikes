class Bicicletas {
    constructor (art, marca, modelo, rodado, descarrilador, pataCambios, frenos, mazas, precio, stock) {
        this.art = art;
        this.marca = marca;
        this.modelo = modelo;
        this.rodado = rodado;
        this.descarrilador = descarrilador;
        this.pataCambios = pataCambios;
        this.frenos = frenos;
        this.mazas = mazas;
        this.precio = precio;
        this.stock = stock;
    }
}
class Camaras {
    constructor (art, marca, rodado, valvula, precio, stock) {
        this.art = art;
        this.marca = marca;
        this.rodado = rodado;
        this.valvula = valvula;
        this.precio = precio;
        this.stock = stock;
    }
}
class Cubiertas {
    constructor (art, marca, rodado, perfil, precio, stock) {
        this.art = art;
        this.marca = marca;
        this.rodado = rodado;
        this.perfil = perfil;
        this.precio = precio;
        this.stock = stock;
    }
}
class Cascos {
    constructor (art, marca, color, talle, precio, stock) {
        this.art = art;
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;
    }
}
function precioDto(precio, dto) {
    return precio = precio - (precio * dto)/100;
}
function generarDescuento(precio) {
    alert("precio = " + precio);
    nuevoPrecio = precioDto(precio, prompt("ingrese el descuento: "));
    return alert("El precio con descuento es: " + nuevoPrecio);    
}


productos = [];

productos.push(new Bicicletas("5000", "Venzo", "Loki Evo", "29", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 95000, 5));
productos.push(new Bicicletas("5001", "Venzo", "Eolo", "27.5", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 95000, 3));
productos.push(new Bicicletas("5002", "Venzo", "Loki Shadow", "29", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 95000, 10));
productos.push(new Bicicletas("6000", "Raleigh", "Mojave 2.0", "29", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 95000, 8));
productos.push(new Bicicletas("6001", "Raleigh", "Mojave 4.0", "29", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 145000, 2));
productos.push(new Bicicletas("6002", "Raleigh", "Mojave 9.5", "29", "Shimano", "Shimano", "Disco Mecánico", "Shimano", 195000, 1));
productos.push(new Camaras("7000", "Deestone", "29", "Auto", 1800, 100));
productos.push(new Camaras("7001", "Slime", "26", "Auto", 1500, 80));
productos.push(new Camaras("7002", "Hutchinson", "29", "Auto", 2000, 50));
productos.push(new Cubiertas("8000", "Continental", "29", "Tacos", 2100, 90));
productos.push(new Cubiertas("8001", "Maxxis", "29", "Mixta", 2500, 65));
productos.push(new Cubiertas("8002", "Vittoria", "29", "Mixta", 2300, 55));
productos.push(new Cascos("9000", "Firsthouse", "Azul", "S", 4800, 5));
productos.push(new Cascos("9001", "Giro", "Violeta", "M", 6300, 2));
productos.push(new Cascos("9002", "Kask", "Negro", "L", 5100, 3));


let precio = parseFloat(0);
let nuevoPrecio = parseFloat(0);
let eleccion = prompt ("Elija el producto\n1. Bicicletas\n2.Cámaras\n3.Cubiertas\n4.Cascos\n5.Salir");
while(eleccion != 5) {
    switch (eleccion) {
        case "1":
            let biciEleccion = prompt("Escoja la Bicicleta\n1. Art: 5000\n2. Art: 5001\n3. Art: 5002\n4. Art: 6000\n5. Art: 6001\n6. Art: 6002\n7. Salir");
            while(biciEleccion != 7) {
                switch(biciEleccion) {
                    case "1":
                        generarDescuento(95000);                
                        break;
                    case "2":
                        generarDescuento(95000);
                        break;
                    case "3":
                        generarDescuento(95000);
                        break;
                    case "4":
                        generarDescuento(95000);
                        break;
                    case "5":
                        generarDescuento(145000);
                        break;
                    case "6":
                        generarDescuento(195000);
                        break;
                    default:
                        alert("Ingresó incorrectamente, reingrese");    
                        break;
                }
                biciEleccion = prompt("Escoja la Bicicleta\n1. Art: 5000\n2. Art: 5001\n3. Art: 5002\n4. Art: 6000\n5. Art: 6001\n6. Art: 6002\n7. Salir");
            } 
            break;
        case "2":
            let camaraEleccion = prompt("Escoja la Cámara\n1. Art: 7000\n2. Art: 7001\n3. Art. 7002\n4. Salir")
            while(camaraEleccion != 4) {
                switch(camaraEleccion) {
                    case "1":
                        generarDescuento(1800);
                        break;
                    case "2":
                        generarDescuento(1500);
                        break;
                    case "3":
                        generarDescuento(2000);
                        break;
                    default:
                        alert("Ingresó incorrectamente, reingrese");    
                        break;
                }
                camaraEleccion = prompt("Escoja la Cámara\n1. Art: 7000\n2. Art: 7001\n3. Art. 7002\n4. Salir")
            }
            break;
        case "3":
            let cubiertaEleccion = prompt("Escoja la Cubierta\n1. Art: 8000\n2. Art: 8001\n3. Art. 8002\n4. Salir")
            while(cubiertaEleccion != 4) {
                switch(cubiertaEleccion) {
                    case "1":
                        generarDescuento(2100);
                        break;
                    case "2":
                        generarDescuento(2500);
                        break;
                    case "3":
                        generarDescuento(2300);
                        break;
                    default:
                        alert("Ingresó incorrectamente, reingrese");    
                        break;
                }
                cubiertaEleccion = prompt("Escoja la Cubierta\n1. Art: 8000\n2. Art: 8001\n3. Art. 8002\n4. Salir")
            }
            break;
        case "4":
            let cascoEleccion = prompt("Escoja el Casco\n1. Art: 9000\n2. Art: 9001\n3. Art. 9002\n4. Salir")
            while(cascoEleccion != 4) {
                switch(cascoEleccion) {
                    case "1":
                        generarDescuento(4800);
                        break;
                    case "2":
                        generarDescuento(6300);
                        break;
                    case "3":
                        generarDescuento(5100);
                        break;
                    default:
                        alert("Ingresó incorrectamente, reingrese");    
                        break;
                }
                cascoEleccion = prompt("Escoja el Casco\n1. Art: 9000\n2. Art: 9001\n3. Art. 9002\n4. Salir")
            }
            break;
        default:
            alert("Ingresó incorrectamente, reingrese");
            break;
    }
    eleccion = prompt ("Elija el producto\n1. Bicicletas\n2.Cámaras\n3.Cubiertas\n4.Cascos\n5.Salir");
}
alert("Muchas gracias! Hasta la próxima!");










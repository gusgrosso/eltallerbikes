// Defino una clase para poder generar los objetos 
class Articulo {
    constructor (id, foto, categoria, marca, modelo, rodado, velocidades, color, precio) {
        this.id = id;
        this.foto = foto;
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.rodado = rodado;
        this.velocidades = velocidades;
        this.color = color;
        this.precio = parseFloat(precio);
    }
}

// defino el arreglo donde voy a cargar mis productos
let productos = [];

// cargo mediante el push los objetos 
productos.push(new Articulo(1, "../img/bicicletas/venzo_Eolo_27-5.jpg" , "Bicicletas", "Venzo", "Eolo", 27.5, 21, "Verde",  95000));
productos.push(new Articulo(2, "../img/bicicletas/venzo_Loki_Evo_29.jpg" , "Bicicletas", "Venzo", "Loki Evo", 29, 21, "Gris", 105000));
productos.push(new Articulo(3, "../img/bicicletas/venzo_Loki_Shadow_29.jpg" , "Bicicletas", "Venzo", "Loki Shadow", 29, 21, "Negro", 95000));
productos.push(new Articulo(4, "../img/bicicletas/raleigh_Mojave_2-0_29.jpg" , "Bicicletas", "Raleigh", "Mojave 2.0", 29, 27, "Azul", 95000));
productos.push(new Articulo(5, "../img/bicicletas/raleigh_Mojave_4-0_29.jpg" , "Bicicletas", "Raleigh", "Mojave 4.0", 29, 24, "Celeste", 165000));
productos.push(new Articulo(6, "../img/bicicletas/raleigh_Mojave_9-5_29.jpg" , "Bicicletas", "Raleigh", "Mojave 9.5", 29, 24, "Gris", 220000));
productos.push(new Articulo(7, "../img/camaras/camara-deestone.png" , "Cámaras", "Deestone", "29x2", 29, "", "", 1500));
productos.push(new Articulo(8, "../img/camaras/camara-slime.png" , "Cámaras", "Slime", "26x1.75", 26, "", "", 1300));
productos.push(new Articulo(9, "../img/camaras/camaras-hutchinson.png" , "Cámaras", "Hutchinson", "29x2", 29, "", "", 1800));
productos.push(new Articulo(10, "../img/cubiertas/cubierta-continental.png" , "Cubiertas", "Continental", "29x2", 29, "", "", 4200));
productos.push(new Articulo(11, "../img/cubiertas/cubierta-maxxis.png" , "Cubiertas", "Maxxis", "29x2", 29, "", "", 5300));
productos.push(new Articulo(12, "../img/cubiertas/cubierta-vittoria.png" , "Cubiertas", "Vittoria", "29x2", 26, "", "", 3500));
productos.push(new Articulo(13, "../img/cascos/casco-firsthouse.png" , "Cascos", "Firsthouse", "Deportivo","" , "", "Azul", 4800));
productos.push(new Articulo(14, "../img/cascos/casco-giro.png" , "Cascos", "Giro", "Urbano","" ,"" , "Violeta", 5200));
productos.push(new Articulo(15, "../img/cascos/casco-kask.png" , "Cascos", "Kask", "Deportivo","" ,"" ,"Negro", 4600));



// Con esta función voy a dibujar en el html todos los productos que cree y guardé en el arreglo productos
function mostarProductos (array) {
    for (const producto of array) {
        $("#fila").append(`
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Artículo: ${producto.id}</h5>
                                        <img src="${producto.foto}" alt="${producto.modelo}" width="100%">
                                        <p class="card-text">Categoría: ${producto.categoria}</p>
                                        <p class="card-text">Marca: ${producto.marca}</p>
                                        <p class="card-text">Modelo: ${producto.modelo}</p>
                                        <p class="card-text"><strong>$ ${producto.precio}</strong></p>
                                        <a href="#" class="boton__carrito" onclick = cantidadProductosComprados(${producto.id})>Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                            `);
        
    }
}

function limpiarHtml() {
    let eliminar = document.getElementById("fila");
    eliminar.innerHTML = "";
}




// funcion que me va a dar la cantidad de productos sumados al carrito
function cantidadProductosComprados(idProducto) {
    let elemento = document.getElementsByClassName("cantProdCarro")[0];
    let cantidad = parseInt(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    agregarProductosCarrito(idProducto);
    valorTotalCarrito(idProducto);
}


// función que me permite obtener los productos seleccionados y sumarlos al carrito
const carrito = [];
function agregarProductosCarrito(idProducto) {
    let productoComprado = productos.find(art => art.id == idProducto);
    carrito.push(productoComprado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// función que me sumará y acumulará el valor total que va teniendo el carrito
let valorTotal = parseFloat(0);
function valorTotalCarrito(idProducto){
    for (const elemento of productos) {
        if (elemento.id == idProducto){
            valorTotal = elemento.precio;
        }
    }
    let valor = document.getElementsByClassName("valorTotCarrito")[0];
    let valTot = parseFloat(valor.innerHTML) + valorTotal;
    valor.innerHTML = valTot;
}




$("#btnFiltro").click(filtrarProductos);


function filtrarProductos () {
    let campoSelect = document.getElementById("categoriasFiltro");
    productosFiltrados = productos.filter(elemento => elemento.categoria == campoSelect.value);
    limpiarHtml();
    mostarProductos(productosFiltrados);
}  

mostarProductos(productos);

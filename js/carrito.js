
// Recupero del Json el importe total y el carrito
let totalPesosCarrito = JSON.parse(localStorage.getItem("importeTotal"));
let listadoCompras = JSON.parse(localStorage.getItem("carrito"));

// Como el carrito puede tener duplicados, voy a trabajarlo para que me quede un nuevo carro sin duplicados y con las cantidades sumadas
const miCarritoSinDuplicados = listadoCompras.reduce((acumulador, valorActual) => {
    const elementoYaExiste = acumulador.find(elemento => elemento.id === valorActual.id);
    if (elementoYaExiste) {
      return acumulador.map((elemento) => {
        if (elemento.id === valorActual.id) {
          return {
            ...elemento,
            cantidad: elemento.cantidad + valorActual.cantidad
          }
        }
  
        return elemento;
      });
    }
  
    return [...acumulador, valorActual];
  }, []);

// dibujo el nuevo carrito
function verCarrito() {
    
    for (const producto of miCarritoSinDuplicados) {
        $("#filaCarrito").append(`
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Artículo: ${producto.id}</h5>
                                                <img src="${producto.foto}" alt="${producto.modelo}" width="100%">
                                                <p class="card-text">Categoría: ${producto.categoria}</p>
                                                <p class="card-text">Marca: ${producto.marca}</p>
                                                <p class="card-text">Modelo: ${producto.modelo}</p>
                                                <p class="card-text"><strong>$ ${producto.precio}</strong></p>
                                                <p class="card-text"><strong>Cantidad: ${producto.cantidad}</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                    `);
        
        totalPesosCarrito = producto.precio + totalPesosCarrito;   
    }
}

// fin del programa carrito con los importes, iva y total
let iva = totalPesosCarrito * 21/100;
let totalIvaIncluido = totalPesosCarrito + iva;

$("#totCarrito").append(`<p class="centradoImporteCarrito">Importe total sin IVA: $ ${totalPesosCarrito}</p>
                         <p class="centradoImporteCarrito">IVA: $ ${iva} </p>
                         <p id="totalFinal" class="centradoImporteCarrito">Total con Iva Incluido: <strong>$ ${totalIvaIncluido} </strong></p>                           
                        `)



verCarrito();

$("#totalFinal").css("color", "white")
                .slideUp(2000)
                .slideDown(2000)


let totalPesosCarrito = JSON.parse(localStorage.getItem("importeTotal"));
let listadoCompras = JSON.parse(localStorage.getItem("carrito"));

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

let iva = totalPesosCarrito * 21/100;
let totalIvaIncluido = totalPesosCarrito + iva;

$("#totCarrito").append(`<p class="centradoImporteCarrito">Importe total sin IVA: $ ${totalPesosCarrito}</p>
                         <p class="centradoImporteCarrito">IVA: $ ${iva} </p>
                         <p class="centradoImporteCarrito">Total con Iva Incliudo: <strong>$ ${totalIvaIncluido} </strong></p>                           
                        `)


verCarrito();

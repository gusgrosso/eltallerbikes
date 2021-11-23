
let totalPesosCarrito = JSON.parse(localStorage.getItem("importeTotal"));


function verCarrito() {
    let listadoCompras = JSON.parse(localStorage.getItem("carrito"));
    for (const producto of listadoCompras) {
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
                                            </div>
                                        </div>
                                    </div>
                                    `);
        
        totalPesosCarrito = producto.precio + totalPesosCarrito;   
    }
}

$("#totCarrito").append(`<p>Importe total: ${totalPesosCarrito}</p>`)


verCarrito();

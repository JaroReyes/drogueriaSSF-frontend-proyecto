document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente cargado. Inicializando componentes de Droguería SSF...');

    const formInventario = document.getElementById('formInventario');
    if (formInventario) {
        formInventario.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Producto registrado exitosamente en el inventario de Droguería SSF.');
            formInventario.reset();
        });
    }
});

function consultarStock(sku) {
    alert(`Consultando disponibilidad en tiempo real para el ítem: ${sku}`);
}

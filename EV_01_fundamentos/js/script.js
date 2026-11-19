document.addEventListener('DOMContentLoaded', () => {
    const btnConsultar = document.getElementById('btnConsultar');
    const resultado = document.getElementById('resultado');

    btnConsultar.addEventListener('click', () => {
        resultado.style.display = 'block';
        resultado.style.backgroundColor = '#d4edda';
        resultado.style.color = '#155724';
        resultado.style.border = '1px solid #c3e6cb';
        
        resultado.innerHTML = `
            <strong>Estado de Inventario (drogueriaSSF):</strong><br>
            Sistemas conectados correctamente. Productos básicos disponibles en stock.
        `;
    });
});
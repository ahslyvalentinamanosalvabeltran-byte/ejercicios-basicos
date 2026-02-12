function validarEdad() {
    const edad = parseInt(document.getElementById('edadVotar').value);
    const resultado = document.getElementById('resultadoEdad');
    resultado.style.display = 'block';

    if (isNaN(edad)) {
        resultado.className = 'result error';
        resultado.textContent = '⚠️ Por favor ingresa una edad válida';
    } else if (edad >= 18) {
        resultado.className = 'result success';
        resultado.textContent = `✓ Tienes ${edad} años. Puedes votar.`;
    } else {
        resultado.className = 'result error';
        resultado.textContent = `✗ Tienes ${edad} años. No puedes votar aún. Te faltan ${18 - edad} años.`;
    }
}

function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultadoPromedio');
    resultado.style.display = 'block';

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.className = 'result error';
        resultado.textContent = '⚠️ Por favor ingresa las 3 calificaciones';
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;
    
    if (promedio >= 60) {
        resultado.className = 'result success';
        resultado.textContent = `✓ Promedio: ${promedio.toFixed(2)} - ¡Aprobado!`;
    } else {
        resultado.className = 'result error';
        resultado.textContent = `✗ Promedio: ${promedio.toFixed(2)} - Reprobado`;
    }
}

function contarPalabras() {
    const texto = document.getElementById('textoInput').value.trim();
    const resultado = document.getElementById('resultadoPalabras');
    resultado.style.display = 'block';

    if (texto === '') {
        resultado.className = 'result error';
        resultado.textContent = '⚠️ Por favor escribe algo de texto';
        return;
    }

    const palabras = texto.split(/\s+/).filter(palabra => palabra.length > 0);
    const caracteres = texto.length;
    
    resultado.className = 'result success';
    resultado.innerHTML = `
        📝 <strong>Palabras:</strong> ${palabras.length}<br>
        🔤 <strong>Caracteres:</strong> ${caracteres}<br>
        📊 <strong>Promedio caracteres/palabra:</strong> ${(caracteres / palabras.length).toFixed(2)}
    `;
}

function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const texto = input.value.trim();
    
    if (texto === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    const id = Date.now();
    tareas.push({ id, texto, completada: false });
    
    input.value = '';
    renderizarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    renderizarTareas();
}

function toggleTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}
let tareas = [];

function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const texto = input.value.trim();
    
    if (texto === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    const id = Date.now();
    tareas.push({ id, texto, completada: false });
    
    input.value = '';
    renderizarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    renderizarTareas();
}

function toggleTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}

function renderizarTareas() {
    const lista = document.getElementById('listaTareas');
    
    if (tareas.length === 0) {
        lista.innerHTML = '<p style="color: #666; text-align: center;">No hay tareas. ¡Agrega una!</p>';
        return;
    }

    lista.innerHTML = tareas.map(tarea => `
        <div class="task-item ${tarea.completada ? 'completed' : ''}">
            <span onclick="toggleTarea(${tarea.id})" style="cursor: pointer; flex: 1;">
                ${tarea.completada ? '✓' : '○'} ${tarea.texto}
            </span>
            <button class="delete-btn" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        </div>
    `).join('');
    }

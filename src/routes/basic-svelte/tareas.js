import { writable, derived } from 'svelte/store';

export let tareas = writable([
    { id: 1, nombre: 'Lavar el cochoe', completada: false },
    { id: 2, nombre: 'Hacer la compra', completada: false },
    { id: 3, nombre: 'Pasear al perro', completada: false },
    { id: 4, nombre: 'Estudiar Svelte', completada: false },
    { id: 5, nombre: 'Hacer deporte', completada: false },
    { id: 6, nombre: 'Cocinar', completada: false },
    { id: 7, nombre: 'Llamar a mi madre', completada: false },
    { id: 8, nombre: 'Leer un libro', completada: false },
    { id: 9, nombre: 'Ver una película', completada: false },
    { id: 10, nombre: 'Hacer la comida', completada: false }
]);

export let totalTareas = derived(tareas, $tareas => $tareas.length);
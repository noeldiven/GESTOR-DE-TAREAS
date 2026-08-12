import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

interface Tarea {
  id: number;
  nombre: string;
  estado: boolean;    
}

let opcion:number = 0;
let contador_tareas:number = 0;
let lista_tareas:Tarea[] = [];
let nombre_sistema:string = "     Gestor de Tareas";
let version_sistema:number = 3;
let usuario:string = "Noel";

console.log("==================================");
console.log(nombre_sistema + "  V:" + version_sistema);
console.log("       ¡Bienvenido, " + usuario + "!");
console.log("==================================");

const answer = await rl.question("¿Cuál es tu nombre? ");
console.log(`Hola, ${answer}!`);

/*
Arrow functions para cada acción#
Envuelve cada acción del menú en su propia arrow function. Esto hace el código más organizado y fácil de mantener:

const addTask = (title: string) => { ... }
const listTasks = () => { ... }
const removeTask = () => { ... } — debe mostrar el título de la tarea eliminada
*/

const agregarTarea = (nuevaTarea: string): void => {
    const tarea: Tarea = {id:contador_tareas, nombre: nuevaTarea, estado: false};
    lista_tareas.push(tarea);
    contador_tareas++; 
    console.log("Tarea :" +nuevaTarea+" agregada con éxito!");
}

const listarTareas = (): void => {
    console.log("....Tareas Pendientes....");
    for(let i = 0; i < lista_tareas.length; i++){
        console.log("tarea: " + lista_tareas[i].id + ": " + lista_tareas[i].nombre + " - Estado: " + (lista_tareas[i].estado ? "Completada" : "Pendiente"));
    }
}

const eliminarUltimaTarea = (): void => {
    if(lista_tareas.length > 0){
        console.log("eliminando la tarea: " + lista_tareas[lista_tareas.length - 1].nombre + " con id: " + lista_tareas[lista_tareas.length - 1].id + " y estado: " + (lista_tareas[lista_tareas.length - 1].estado ? "Completada" : "Pendiente"));
        lista_tareas.pop();
        console.log("Tarea eliminada! ");
    } else {
        console.log("No hay tareas para eliminar.");
    }
};

while(opcion != 4){
    console.log("==================================");
    console.log("     Gestor de Tareas");
    console.log("Hola " + answer + "! elije una opción:");
    console.log("1. Agregar tarea");
    console.log("2. Ver tareas");
    console.log("3. Eliminar Última tarea");
    console.log("4. Salir");
    console.log("==================================");
    opcion = parseInt(await rl.question("Elige una opción: "));
    if(opcion == 1){
        console.log("....Agregar tarea....");
        let tarea_tmp = await rl.question("ingresa la tarea: ");
        agregarTarea(tarea_tmp);
    }
    else if(opcion == 2){
        listarTareas();
    }
    else if(opcion == 3){
        console.log("....Eliminar última tarea....");
        eliminarUltimaTarea();
    }
    else if(opcion == 4){
        console.log("Saliendo del programa...");
        opcion = 4;
    }
    else{
        console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

// 🚫 No eliminar las líneas de abajo ⬇️*/
rl.close();
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

const markCompleted = (id: number): void => {
    const tarea = lista_tareas.find((tarea) => tarea.id === id);
    if (tarea) {
        tarea.estado = true;
        console.log(`La tarea "${tarea.nombre}" ha sido completada.`);
    } else {
        console.log("No se encontró una tarea con ese ID.");
    }
};

const filterPending = (): Tarea[] => {
    return lista_tareas.filter((tarea) => tarea.estado === false);
};

const filterCompleted = (): Tarea[] => {
    return lista_tareas.filter((tarea) => tarea.estado === true);
};

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
    console.log("....Tareas....");
    const tareasFormateadas = lista_tareas.map((task) => {
        const { id, nombre, estado } = task;
        return `Tarea: ${id} - ${nombre} - Estado: ${
            estado ? "Completada" : "Pendiente"
        }`;
    });
    tareasFormateadas.forEach((tarea) => {
        console.log(tarea);
    });
};

   /* console.log("....Tareas Pendientes....");
    for(let i = 0; i < lista_tareas.length; i++){
        console.log("tarea: " + lista_tareas[i].id + ": " + lista_tareas[i].nombre + " - Estado: " + (lista_tareas[i].estado ? "Completada" : "Pendiente"));
    }
}*/

const eliminarUltimaTarea = (): void => {
    if(lista_tareas.length > 0){
        console.log("eliminando la tarea: " + lista_tareas[lista_tareas.length - 1].nombre + " con id: " + lista_tareas[lista_tareas.length - 1].id + " y estado: " + (lista_tareas[lista_tareas.length - 1].estado ? "Completada" : "Pendiente"));
        lista_tareas.pop();
        console.log("Tarea eliminada! ");
    } else {
        console.log("No hay tareas para eliminar.");
    }
};

while(opcion != 7){
    console.log("==================================");
    console.log("     Gestor de Tareas");
    console.log("Hola " + answer + "! elige una opción:");
    console.log("1. Agregar tarea");
    console.log("2. Ver tareas");
    console.log("3. Eliminar Última tarea");
    console.log("4. Marcar tarea como completada");
    console.log("5. Ver tareas pendientes");
    console.log("6. Ver tareas completadas");
    console.log("7. Salir");
    console.log("==================================");

    opcion = parseInt(await rl.question("Elige una opción: "));

    if(opcion == 1){

        console.log("....Agregar tarea....");
        let tarea_tmp = await rl.question("Ingresa la tarea: ");
        agregarTarea(tarea_tmp);

    } else if(opcion == 2){

        listarTareas();

    } else if(opcion == 3){

        console.log("....Eliminar última tarea....");
        eliminarUltimaTarea();

    } else if(opcion == 4){

        console.log("....Marcar tarea como completada....");

        const id = parseInt(
            await rl.question("Ingresa el ID de la tarea: ")
        );

        markCompleted(id);

    } else if(opcion == 5){

        console.log("....Tareas pendientes....");

        const tareasPendientes = filterPending();

        tareasPendientes.forEach((tarea) => {
            console.log(
                `Tarea: ${tarea.id} - ${tarea.nombre} - Estado: Pendiente`
            );
        });

    } else if(opcion == 6){

        console.log("....Tareas completadas....");

        const tareasCompletadas = filterCompleted();

        tareasCompletadas.forEach((tarea) => {
            console.log(
                `Tarea: ${tarea.id} - ${tarea.nombre} - Estado: Completada`
            );
        });

    } else if(opcion == 7){

        console.log("Saliendo del programa...");

    } else {

        console.log("Opción inválida. Por favor, elige una opción válida.");

    }
}

// 🚫 No eliminar las líneas de abajo ⬇️*/
rl.close();
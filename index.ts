import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let nombre_sistema:string = "     Gestor de Tareas";
let version_sistema:number = 3;
let usuario:string = "Noel";

console.log("==================================");
console.log(nombre_sistema + "  V:" + version_sistema);
console.log("       ¡Bienvenido, " + usuario + "!");
console.log("==================================");



const answer = await rl.question("¿Cuál es tu nombre? ");
console.log(`Hola, ${answer}!`);

let opcion:number = 0;
let lista_tareas:string[] = [];

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
        lista_tareas.push(tarea_tmp);
    }
    else if(opcion == 2){
        console.log("....Tareas Pendientes....");
        for(let i = 0; i < lista_tareas.length; i++){
            console.log("tarea " + (i+1) + ": " + lista_tareas[i]);
        }
    }
    else if(opcion == 3){
        console.log("....Tareas Pendientes....");
        console.log("tarea a eliminar: " + lista_tareas[lista_tareas.length-1]);
        console.log("Tarea Eliminada! ");
        lista_tareas.pop();
        console.log("Tareas Pendientes: " + lista_tareas);
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
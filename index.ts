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

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
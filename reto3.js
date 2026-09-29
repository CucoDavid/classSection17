//MI PREDICCION ES:
//Pues cuando no reciba notas como no tendra que sumar entonces devolvera 0
///Pues los argumentos de la funcion llegaran tipo number
//
import PromptSync from "prompt-sync";
const promp = PromptSync();
function notas(notal) {
    return notal;
}
let total = 0;
let seguir = 0;
while (seguir !== 1) {
    let nota = parseFloat(promp("Ingresa la nota del estudiante"));
    total += notas(nota);
    seguir = parseInt(promp("Si deseas terminar ingresa 1, si deseas continuar ingresa cualquier numero"));
}
console.log(`La nota final de esta persona es: ${total}`);
//# sourceMappingURL=reto3.js.map
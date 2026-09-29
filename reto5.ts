import promptSync from "prompt-sync";
const prompt = promptSync();
function identidad<T>(dato: T): T {
    return dato;
}
let codigo: number = Number(prompt("Ingrese un código numérico: "));
let departamento: string = prompt("Ingrese un departamento: ");
console.log("Código: " + identidad(codigo)); console.log("Departamento: " + identidad(departamento));
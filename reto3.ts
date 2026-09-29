
import promptSync from "prompt-sync";
const prompt = promptSync();
function sumarNotas(...notas: number[]): number {
    let suma: number = 0;
    for (let nota of notas) {
        suma = suma + nota;
    }
    return suma;
}
let nota1: number = Number(prompt("Ingrese la nota 1: "));
let nota2: number = Number(prompt("Ingrese la nota 2: "));
let nota3: number = Number(prompt("Ingrese la nota 3: "));
console.log("La suma es: " + sumarNotas(nota1, nota2, nota3));
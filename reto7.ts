import promptSync from "prompt-sync";
const prompt = promptSync();
function sumarHastaN(n: number): number {
    if (n === 0) {
        return 0;
    } return n + sumarHastaN(n - 1);
}
let numero: number = Number(prompt("Ingrese un número entero no negativo: "));
console.log("La suma es: " + sumarHastaN(numero));
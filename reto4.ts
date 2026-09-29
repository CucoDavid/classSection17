import promptSync from "prompt-sync";
const prompt = promptSync();
function calcular(numero: number, operacion: (n: number) => number): number {
    return operacion(numero);

}
function cuadrado(n: number): number {
    return n * n;
}
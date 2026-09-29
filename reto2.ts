import promptSync from "prompt-sync";

const prompt = promptSync();

function calcularDescuento(precio: number, porcentaje: number = 10): number {
	return precio - (precio * porcentaje / 100);
}

const precio: number = Number(prompt("Ingrese el precio: "));
const porcentaje: number = Number(prompt("Ingrese el descuento: "));

console.log("Precio final: " + calcularDescuento(precio, porcentaje));
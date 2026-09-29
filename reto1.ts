import promptSync from "prompt-sync";

const prompt = promptSync();

function saludar(nombre: string, apellido?: string): string {
	if (apellido) {
		return `Hola, ${nombre} ${apellido}`;
	}

	return `Hola, ${nombre}`;
}

const nombre: string = prompt("Ingrese su nombre: ");
const apellido: string = prompt("Ingrese su apellido: ");

console.log(saludar(nombre, apellido));
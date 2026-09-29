import promptSync from "prompt-sync";
const prompt = promptSync();

function duplicarNumero(numero: number): void {
    numero = numero * 2;
}

type Producto = {
    nombre: string; precio: number;
};

function cambiarPrecio(producto: Producto): void {
    producto.precio = 15;
}
let numero: number = Number(prompt("Ingrese un número: "));
duplicarNumero(numero); console.log("Número original: " + numero);
let producto: Producto = { nombre: "Cuaderno", precio: 10 };
cambiarPrecio(producto); console.log("Precio original: " + producto.precio);
//------------------------------------------------
function cargarProductos(
  productos: string[],
  precios: number[],
  cantidades: number[]
): void {
  for (let i: number = 0; i < productos.length; i++) {
    productos[i] = prompt("ingrese producto");
    precios[i] = Number(prompt("ingrese precio del producto "));
    cantidades[i] = Number(prompt("ingrese cantidad a llevar del producto"));
  }
}

//-------------------------------------------------

let cantidad: number = Number(
  prompt("ingrese catidad de productos que va a comprar")
);
let productos: string[] = Array(cantidad);
let precios: number[] = Array(cantidad);
let cantidades: number[] = Array(cantidad);

cargarProductos(productos, precios, cantidades);

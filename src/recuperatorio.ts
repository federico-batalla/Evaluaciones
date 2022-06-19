//------------------------------------------------
function cargarProductos(
  productos: string[],
  precios: number[],
  cantidades: number[]
): void {}

//-------------------------------------------------

let cantidad: number = Number(
  prompt("ingrese catidad de productos que va a comprar")
);
let productos: string[cantidad];
let precios: number[cantidad];
let cantidades: number[cantidad];

cargarProductos(productos, precios, cantidades);

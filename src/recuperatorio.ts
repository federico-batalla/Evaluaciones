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
//------------------------------------------------
function calificarSorteo(precioTotal: number): void {
  if (precioTotal < 1000) {
    console.log("no participa del sorteo");
  } else {
    if (precioTotal >= 1000 && precioTotal < 2000) {
      console.log("participa por un TV LED");
    } else {
      if (precioTotal >= 2000 && precioTotal < 3000) {
        console.log("Participa por una Moto OKM");
      } else {
        console.log("Partcicipa por un 0KM");
      }
    }
  }
}
//-------------------------------------------------
function mostrarDetalleCompra(
  productos: string[],
  precios: number[],
  cantidades: number[]
): void {
  let precioTotal: number = 0;
  console.log("----------Detalle de Compra---------------");
  console.log("Producto     Cantidad     Pr/u");
  for (let i: number = 0; i < productos.length; i++) {
    console.log(productos[i], "       ", cantidades[i], "      $", precios[i]);
    precioTotal = precioTotal + precios[i] * cantidades[i];
  }
  console.log("Total------------------- $", precioTotal);
  calificarSorteo(precioTotal);
}

//-------------------------------------------------

let cantidad: number = Number(
  prompt("ingrese catidad de productos que va a comprar")
);
let productos: string[] = Array(cantidad);
let precios: number[] = Array(cantidad);
let cantidades: number[] = Array(cantidad);

cargarProductos(productos, precios, cantidades);
mostrarDetalleCompra(productos, precios, cantidades);

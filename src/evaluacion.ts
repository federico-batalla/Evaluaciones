//----------------------Funciones-----------------------
function calcularMaximo(ventas: number[]): number {
  let maximo: number = ventas[0];
  for (let i: number = 0; i < ventas.length; i++) {
    if (maximo < ventas[i]) {
      maximo = ventas[i];
    }
  }
  return maximo;
}
//------------------------------------------------------
function mostrarVentas(
  vendedores: string[],
  ventasVendedor1: number[],
  ventasVendedor2: number[],
  ventasVendedor3: number[],
  ventasVendedor4: number[],
  ventasVendedor5: number[]
): void {
  for (let i: number = 0; i < vendedores.length; i++) {
    console.log("ventas de ", vendedores[i]);
    switch (i) {
      case 0:
        console.log("venta maxima ", calcularMaximo(ventasVendedor1));
        break;
      case 1:
        console.log("venta maxima ", calcularMaximo(ventasVendedor2));
        break;
      case 2:
        console.log("venta maxima ", calcularMaximo(ventasVendedor3));
        break;
      case 3:
        console.log("venta maxima ", calcularMaximo(ventasVendedor4));
        break;
      case 4:
        console.log("venta maxima ", calcularMaximo(ventasVendedor5));
        break;
    }
  }
}
//------------------Programa Principal--------------------
let vendedores: string[] = new Array(
  "Camila",
  "Franco",
  "Sofia",
  "Matias",
  "Agustina"
);
let ventasVendedor1: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);
let ventasVendedor2: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);
let ventasVendedor3: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);

let ventasVendedor4: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);
let ventasVendedor5: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);
mostrarVentas(
  vendedores,
  ventasVendedor1,
  ventasVendedor2,
  ventasVendedor3,
  ventasVendedor4,
  ventasVendedor5
);

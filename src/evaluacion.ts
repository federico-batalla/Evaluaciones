//----------------------Funciones-----------------------
function separador(): void {
  console.log("------------------------------");
}
//------------------------------------------
function mejorSemana(ventas: number[]): number {
  let maximo: number = ventas[0];
  let semana: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    if (maximo < ventas[i]) {
      maximo = ventas[i];
      semana = i;
    }
  }
  return semana;
}
//------------------------------------------
function calcularMaximo(ventas: number[]): number {
  let maximo: number = ventas[0];

  for (let i: number = 0; i < ventas.length; i++) {
    if (maximo < ventas[i]) {
      maximo = ventas[i];
    }
  }
  return maximo;
}
//------------------------------------------
function calcularmes(semana: number): string {
  if (semana <= 4) {
    return "enero";
  } else {
    if (semana > 4 && semana <= 8) {
      return "febrero";
    } else {
      return "marzo";
    }
  }
}
//------------------------------------------------
function mostrarPromedioMensual(ventas: number[]): void {
  let suma: number = 0;
  let promedio: number = 0;
  let enero: number = 0;
  let febrero: number = 0;
  let marzo: number = 0;
  for (let i: number = 0; i < 4; i++) {
    enero = enero + ventas[i];
  }
  for (let i: number = 4; i < 8; i++) {
    febrero = febrero + ventas[i];
  }
  for (let i: number = 8; i < ventas.length; i++) {
    marzo = marzo + ventas[i];
  }
  suma = enero + febrero + marzo;
  promedio = suma / (ventas.length / 4);
  console.log("promedio venta semanal : ", promedio);
}
//------------------------------------------------
function mostrarPromedioSemanal(ventas: number[]): void {
  let suma: number = 0;
  let promedio: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    suma = suma + ventas[i];
  }
  promedio = suma / ventas.length;
  console.log("promedio venta semanal : ", promedio);
}
//--------------------------------------------------------
function mostrarVentaSemanalMinima(ventas: number[]): void {
  let minimo: number = ventas[0];
  let semana: number = 0;
  for (let i: number = 0; i < ventas.length; i++) {
    if (minimo > ventas[i]) {
      minimo = ventas[i];
      semana = i;
    }
  }
  console.log(
    "venta minima: ",
    minimo,
    "semana",
    semana,
    "mes",
    calcularmes(semana)
  );
}

//---------------------------------------------------
function mostrarVentaSemanalMaxima(ventas: number[]): void {
  console.log(
    "venta maxima: ",
    calcularMaximo(ventas),
    "semana",
    mejorSemana(ventas),
    "mes",
    calcularmes(mejorSemana(ventas))
  );
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
        mostrarVentaSemanalMaxima(ventasVendedor1);
        mostrarVentaSemanalMinima(ventasVendedor1);
        mostrarPromedioSemanal(ventasVendedor1);
        mostrarPromedioMensual(ventasVendedor1);
        separador();

        break;
      case 1:
        mostrarVentaSemanalMaxima(ventasVendedor2);
        mostrarVentaSemanalMinima(ventasVendedor2);
        mostrarPromedioSemanal(ventasVendedor2);
        mostrarPromedioMensual(ventasVendedor2);
        separador();
        break;
      case 2:
        mostrarVentaSemanalMaxima(ventasVendedor3);
        mostrarVentaSemanalMinima(ventasVendedor3);
        mostrarPromedioSemanal(ventasVendedor3);
        mostrarPromedioMensual(ventasVendedor3);
        separador();
        break;
      case 3:
        mostrarVentaSemanalMaxima(ventasVendedor4);
        mostrarVentaSemanalMinima(ventasVendedor4);
        mostrarPromedioSemanal(ventasVendedor4);
        mostrarPromedioMensual(ventasVendedor4);
        separador();
        break;
      case 4:
        mostrarVentaSemanalMaxima(ventasVendedor5);
        mostrarVentaSemanalMinima(ventasVendedor5);
        mostrarPromedioSemanal(ventasVendedor5);
        mostrarPromedioMensual(ventasVendedor5);
        separador();
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

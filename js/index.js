import { facturas } from "../datos/facturas.js";

// Filtro de facturas por tipo

const getfacturasIngreso = (tipoFactura) =>
  facturas.filter(
    (factura) => factura.tipo.toLowerCase() === tipoFactura.toLowerCase()
  );

const facturasIngreso = getfacturasIngreso("ingreso");

const contenedorFilas = document.querySelector(".contenedor-filas");

// Iteración de facturas tipo ingreso

for (const {
  numero,
  fecha,
  vencimiento,
  concepto,
  base,
  tipoIva,
  tipo,
  abonada,
} of facturasIngreso) {
  const filaElemento = document.querySelector(".fila-molde").cloneNode(true);
  filaElemento.classList.remove("fila-molde");

  console.log(filaElemento);

  // Número
  const numeroFactura = filaElemento.querySelector(".numero");
  numeroFactura.textContent = numero;

  // Fecha

  const fechaFactura = filaElemento.querySelector(".fecha");
  const pasarFecha = new Date(fecha);
  fechaFactura.textContent = pasarFecha.toLocaleDateString();

  // Vencimiento

  const vencimientoFactura = filaElemento.querySelector(".vence");
  const pasarFechaVencimiento = new Date(vencimiento);
  vencimientoFactura.textContent = pasarFechaVencimiento.toLocaleDateString();

  // Concepto

  const conceptoFactura = filaElemento.querySelector(".concepto");
  conceptoFactura.textContent = concepto;

  // Base

  const baseFactura = filaElemento.querySelector(".base");
  baseFactura.textContent = base;

  // Iva

  const ivaFactura = filaElemento.querySelector(".iva");
  const calculoBaseMasIva = (base * tipoIva) / 100;
  ivaFactura.textContent = `${calculoBaseMasIva}€ (${tipoIva}%)`;

  // Total
  const precioEntero = filaElemento.querySelector(".base-mas-iva");
  precioEntero.textContent = (base * tipoIva) / 100 + base;

  // Estado
  const estadoFactura = filaElemento.querySelector(".estado");
  estadoFactura.textContent = abonada ? "Abonada" : "Pendiente";

  // Añadir filas
  contenedorFilas.append(filaElemento);
}

// Pie de tabla
const baseTotal = document.querySelector(".base-total");
const ivaTotal = document.querySelector(".iva-total");
const totalTotal = document.querySelector(".total-total");

baseTotal.textContent = `${facturasIngreso.reduce(
  (acumulador, { base }) => acumulador + base,
  0
)}€`;

ivaTotal.textContent = `${facturasIngreso.reduce(
  (acumulador, { tipoIva, base }) => acumulador + (base * tipoIva) / 100,
  0
)}€`;

totalTotal.textContent = `${facturasIngreso
  .reduce(
    (acumulador, { tipoIva, base }) =>
      acumulador + (base + (base * tipoIva) / 100),
    0
  )
  .toFixed(2)}€`;

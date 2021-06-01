import { facturas } from "../datos/facturas.js";

// Filtro de facturas por tipo

const getfacturasIngreso = (tipoFactura) =>
  facturas.filter(
    (factura) => factura.tipo.toLowerCase() === tipoFactura.toLowerCase()
  );

const facturasIngreso = getfacturasIngreso("ingreso");

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

  // Número
  const numeroFactura = document.querySelector(".numero");
  numeroFactura.textContent = numero;

  // Fecha

  const fechaFactura = document.querySelector(".fecha");
  const pasarFecha = new Date(fecha);
  fechaFactura.textContent = pasarFecha.toLocaleDateString();

  // Vencimiento

  const vencimientoFactura = document.querySelector(".vence");
  const pasarFechaVencimiento = new Date(vencimiento);
  vencimientoFactura.textContent = pasarFechaVencimiento.toLocaleDateString();

  // Concepto

  const conceptoFactura = document.querySelector(".concepto");
  conceptoFactura.textContent = concepto;

  // Base

  const baseFactura = document.querySelector(".base");
  baseFactura.textContent = base;

  // Iva

  const ivaFactura = document.querySelector(".iva");
  const calculoBaseMasIva = (base * tipoIva) / 100;
  ivaFactura.textContent = `${calculoBaseMasIva}€ (${tipoIva}%)`;

  // Añadir filas
  const contenedorFilas = document.querySelector(".contenedor-filas");
  contenedorFilas.append(filaElemento);
}

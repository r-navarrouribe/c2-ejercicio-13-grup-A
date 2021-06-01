import { facturas } from "../datos/facturas.js";

const getfacturasIngreso = (tipoFactura) => facturas.filter((factura) => factura.tipo.toLowerCase() === tipoFactura.toLowerCase());

const facturasIngreso = getfacturasIngreso("ingreso");

console.log(facturasIngreso);

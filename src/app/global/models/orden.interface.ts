import { ClienteI } from "./cliente.interface";
import { DetalleOrdenArticuloI } from "./detalleOrdenArticulo.interface";

export interface OrdenI {
    id?: number,
    clienteId?: ClienteI,
    codigo: string,
    totalArticulos: number,
    detalleOrdenArticulo: DetalleOrdenArticuloI[]
}
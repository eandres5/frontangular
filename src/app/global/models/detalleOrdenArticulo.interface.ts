import { ArticuloI } from "./articulo.interface";
import { OrdenI } from "./orden.interface";

export interface DetalleOrdenArticuloI {
    id?: number,
    ordenId: OrdenI;
	articuloId: ArticuloI;
}
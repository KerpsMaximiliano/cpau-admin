import { PREFIX_DOMAIN_API } from "environments/environment";
import { Action } from "rxjs/internal/scheduler/Action";

export const SECCION_BOLETIN_CONTENIDO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'seccion_boletin_contenido_grid_def_column_id'
    },
    {
      columnDef: 'numero',
      columnNameKey: 'seccion_boletin_contenido_grid_def_column_numero'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'seccion_boletin_contenido_grid_def_column_titulo'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    //'id',
    'numero',
    'titulo'
  ],
};

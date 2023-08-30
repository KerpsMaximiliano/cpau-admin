import { PREFIX_DOMAIN_API } from "environments/environment";

export const CATEGORIA_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'categoria_grid_def_column_id'
    },
    {
      columnDef: 'nombre',
      columnNameKey: 'categoria_grid_def_column_nombre'
    },
    {
      columnDef: 'descripcion',
      columnNameKey: 'categoria_grid_def_column_descripcion'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'categoria_grid_def_column_orden'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'nombre',
    'descripcion',
    'orden'
  ],
  actions : [
    {
      actionNameKey: 'categoria_grid_def_button_action_reordenar',
      icon: 'swipe_vertical',
      confirm: true,
      ws: {
        key: 'seccion_grid_def_button_action_reordenar',
        url: PREFIX_DOMAIN_API + 'Producto/ResetPositions',
        method: 'PUT'
      }
    }
  ]
};

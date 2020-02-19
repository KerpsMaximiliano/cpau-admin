export const BOLETIN_CONTENIDO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'boletin_contenido_grid_def_column_id'
    },
    {
      columnDef: 'boletinId',
      columnNameKey: 'boletin_contenido_grid_def_column_boletinid'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'boletin_contenido_grid_def_column_boletinid'
    },
    {
      columnDef: 'pageId',
      columnNameKey: 'boletin_contenido_grid_def_column_pageid'
    },
    {
      columnDef: 'content',
      columnNameKey: 'boletin_contenido_grid_def_column_pageid'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'boletin_contenido_grid_def_column_orden'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'content',
    'orden'
  ],
  deleteAction: true
};

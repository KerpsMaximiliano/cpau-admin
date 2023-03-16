export const PERMISO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'permiso_grid_def_column_id'
    },
    {
      columnDef: 'codigo',
      columnNameKey: 'permiso_grid_def_column_codigo'
    },
    {
      columnDef: 'nombre',
      columnNameKey: 'permiso_grid_def_column_nombre'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'codigo',
    'nombre'
  ],
  deleteAction: true
};

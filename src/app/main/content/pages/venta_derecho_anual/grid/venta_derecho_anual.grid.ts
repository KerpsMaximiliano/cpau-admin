export const VENTA_DERECHO_ANUAL_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'venta_derecho_anual_grid_def_column_id'
    },
    {
      columnDef: 'idVenta',
      columnNameKey: 'venta_derecho_anual_grid_def_column_idventa'
    },
    {
      columnDef: 'montoString',
      columnNameKey: 'venta_derecho_anual_grid_def_column_monto'
    },
    {
      columnDef: 'monto',
      columnNameKey: 'venta_derecho_anual_grid_def_column_monto'
    },
    {
      columnDef: 'periodo',
      columnNameKey: 'venta_derecho_anual_grid_def_column_periodo'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'periodo',
    'montoString'
  ]
};

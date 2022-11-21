export const VENTA_TRAMITE_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'venta_tramite_grid_def_column_id'
    },
    {
      columnDef: 'idVenta',
      columnNameKey: 'venta_tramite_grid_def_column_idventa'
    },
    {
      columnDef: 'idTramite',
      columnNameKey: 'venta_tramite_grid_def_column_idtramite'
    },
    {
      columnDef: 'detalle',
      columnNameKey: 'venta_tramite_grid_def_column_detalle'
    },
    {
      columnDef: 'monto',
      columnNameKey: 'venta_tramite_grid_def_column_monto'
    },
    {
      columnDef: 'montoString',
      columnNameKey: 'venta_tramite_grid_def_column_monto'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'idVenta',
    'idTramite',
    'detalle',
    'montoString'
  ]
};

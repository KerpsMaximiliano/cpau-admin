export const VENTA_ENVIO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'venta_envio_grid_def_column_id'
    },
    {
      columnDef: 'idVenta',
      columnNameKey: 'venta_envio_grid_def_column_idventa'
    },
    {
      columnDef: 'idVentaProducto',
      columnNameKey: 'venta_envio_grid_def_column_idventaproducto'
    },
    {
      columnDef: 'monto',
      columnNameKey: 'venta_envio_grid_def_column_monto'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'id',
    'idVenta',
    'idVentaProducto',
    'monto'
  ]
};

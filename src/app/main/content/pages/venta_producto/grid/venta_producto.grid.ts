export const VENTA_PRODUCTO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'venta_producto_grid_def_column_id'
    },
    {
      columnDef: 'idVenta',
      columnNameKey: 'venta_producto_grid_def_column_idventa'
    },
    {
      columnDef: 'idProducto',
      columnNameKey: 'venta_producto_grid_def_column_idproducto'
    },
    {
      columnDef: 'cantidad',
      columnNameKey: 'venta_producto_grid_def_column_cantidad'
    },
    {
      columnDef: 'precio',
      columnNameKey: 'venta_producto_grid_def_column_precio'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'id',
    'idVenta',
    'idProducto',
    'cantidad',
    'precio'
  ]
};

export const VENTA_PRODUCTO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
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
      columnDef: 'producto',
      columnNameKey: 'venta_producto_grid_def_column_producto'
    },
    {
      columnDef: 'cantidad',
      columnNameKey: 'venta_producto_grid_def_column_cantidad'
    },
    {
      columnDef: 'precio',
      columnNameKey: 'venta_producto_grid_def_column_precio'
    },
    {
      columnDef: 'precioString',
      columnNameKey: 'venta_producto_grid_def_column_precio'
    },
    {
      columnDef: 'total',
      columnNameKey: 'venta_producto_grid_def_column_total'
    }

  ],
  sortAllColumns: true,
  displayedColumns: [
    'producto',
    'cantidad',
    'precioString',
    'total'
  ]
};

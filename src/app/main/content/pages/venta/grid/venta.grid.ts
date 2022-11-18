import { FILTER_TYPE } from "app/modules/fwk/core/service/filter-service/filter.service";

export const VENTA_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'venta_grid_def_column_id'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'venta_grid_def_column_tipo'
    },
    {
      columnDef: 'tipoString',
      columnNameKey: 'venta_grid_def_column_tipo'
    },
    {
      columnDef: 'montoTotal',
      columnNameKey: 'venta_grid_def_column_montototal'
    },
    {
      columnDef: 'montoTotalString',
      columnNameKey: 'venta_grid_def_column_montototal'
    },
    {
      columnDef: 'tarjeta',
      columnNameKey: 'venta_grid_def_column_tarjeta'
    },
    {
      columnDef: 'cuotas',
      columnNameKey: 'venta_grid_def_column_cuotas'
    },
    {
      columnDef: 'estadoPago',
      columnNameKey: 'venta_grid_def_column_estadopago'
    },
    {
      columnDef: 'estadoPagoEnvio',
      columnNameKey: 'venta_grid_def_column_estadopagoenvio'
    },
    {
      columnDef: 'estadoPagoString',
      columnNameKey: 'venta_grid_def_column_estadopago'
    },
    {
      columnDef: 'estadoPagoEnvioString',
      columnNameKey: 'venta_grid_def_column_estadopagoenvio'
    },
    {
      columnDef: 'userId',
      columnNameKey: 'venta_grid_def_column_userid'
    },
    {
      columnDef: 'fechaCompra',
      columnNameKey: 'venta_grid_def_column_fechacompra'
    },
    {
      columnDef: 'username',
      columnNameKey: 'venta_grid_def_column_username'
    },
    {
      columnDef: 'fechaCompraString',
      columnNameKey: 'venta_grid_def_column_fechacomprastring'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'id',
    'tipoString',
    'montoTotalString',
    'tarjeta',
    'cuotas',
    'estadoPagoString',
    'estadoPagoEnvioString',
    'username',
    'fechaCompraString'
  ],
  actions : [
    {
      actionNameKey: 'venta_grid_def_column_accion_venta_envio',
      actionType: 'redirect',
      redirect: {
        url: '/VentaEnvio',
        querystring: {
          ventaId : 'id',
          parentTitle: 'id'
        }
      },
      icon: 'local_shipping'
    },
    {
      actionNameKey: 'venta_grid_def_column_accion_venta_derecho_anual',
      actionType: 'redirect',
      redirect: {
        url: '/VentaDetalleDerechoAnual',
        querystring: {
          ventaId : 'id',
          parentTitle: 'id'
        }
      },
      icon: 'card_membership'
    },
    {
      actionNameKey: 'venta_grid_def_column_accion_venta_productos',
      actionType: 'redirect',
      redirect: {
        url: '/VentaProducto',
        querystring: {
          ventaId : 'id',
          parentTitle: 'id'
        }
      },
      icon: 'inventory_2'
    },
    {
      actionNameKey: 'venta_grid_def_column_accion_venta_tramites',
      actionType: 'redirect',
      redirect: {
        url: '/VentaTramite',
        querystring: {
          ventaId : 'id',
          parentTitle: 'id'
        }
      },
      icon: 'business_center'
    },
  ],
  displayedActionsCondition: [
    {
      key: 'venta_grid_def_column_accion_venta_envio',
      expression: {
                    key: 'estadoPagoEnvio',
                    value: 'NOAPLICA',
                    compare: FILTER_TYPE.NOT_EQUALS
                  }
    },
    {
      key: 'venta_grid_def_column_accion_venta_productos',
      expression: {
                    key: 'tipo',
                    value: 'PRODUCTO',
                    compare: FILTER_TYPE.LIKE
                  }
    },
    {
      key: 'venta_grid_def_column_accion_venta_derecho_anual',
      expression: {
                    key: 'tipo',
                    value: 'DERECHOANUAL',
                    compare: FILTER_TYPE.LIKE
                  }
    },
    {
      key: 'venta_grid_def_column_accion_venta_tramites',
      expression: {
                    key: 'tipo',
                    value: 'TRAMITE',
                    compare: FILTER_TYPE.LIKE
                  }
    }
  ]
};

import { FILTER_TYPE } from "app/modules/fwk/core/service/filter-service/filter.service";
import { PREFIX_DOMAIN_API } from "environments/environment";

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
    },
    {
      columnDef: 'nombreEnvio',
      columnNameKey: 'venta_grid_def_column_nombreenvio'
    },
    {
      columnDef: 'domicilioEnvio',
      columnNameKey: 'venta_grid_def_column_domicilioenvio'
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
      actionNameKey: 'venta_grid_def_column_accion_venta_derecho_anual',
      actionType: 'redirect',
      redirect: {
        url: '/VentaDerechoAnual',
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
    {
      icon: 'local_shipping',
      actionNameKey: 'venta_grid_def_column_accion_venta_generarenvio',
      formDef: {
        showSubmitContinue: false,
        fields:[
          {
            key: 'nombreEnvio',
            labelKey: 'venta_grid_def_column_nombreenvio',
            label: 'Nombre',
            controlType: 'textbox',
            disabled: true
          }, 
          {
            key: 'domicilioEnvio',
            labelKey: 'venta_grid_def_column_domicilioenvio',
            label: 'Domicilio',
            controlType: 'textbox',
            disabled: true
          },
          {
            key: 'monto',
            required: true,
            labelKey: 'venta_grid_def_column_monto',
            label: 'Monto',
            controlType: 'number'
          },
          {
            key: 'medioPago',
            labelKey: 'venta_grid_def_column_medioPago',
            label: 'Medio de Pago',
            type: 'select',
            controlType: 'select',
            required: true,
            options: {
              handlerSourceData: false,
              elementLabel: 'nombre',
              elementValue: 'id',
              fromData: [{id: 15, nombre: 'Mastercard'},
                         {id: 6, nombre: 'American Express'},
                         {id: 1, nombre: 'Visa'},
                         {id: 106, nombre: 'Maestro'},
                         {id: 31, nombre: 'Electrón'},
                         {id: -1, nombre: 'Otros (No se genera cupón de pago y se anula el envío dentro del sistema)'}
                        ]
              }
          }, 
          {
            key: 'id',
            labelKey: 'ID',
            label: 'Id',
            controlType: 'hidden'
          }
        ]
      },
      ws: {
        key: 'venta_grid_def_button_action_generacinoenvio',
        url: PREFIX_DOMAIN_API + 'VentaEnvio',
        method: 'POST'
      }
    },
    {
      icon: 'contact_mail',
      actionNameKey: 'venta_grid_def_column_accion_venta_datosenvio',
      formDef: {
        showSubmitContinue: false,
        fields:[
          {
            key: 'nombreEnvio',
            labelKey: 'venta_grid_def_column_nombreenvio',
            label: 'Nombre',
            controlType: 'textbox',
            disabled: true
          }, 
          {
            key: 'domicilioEnvio',
            labelKey: 'venta_grid_def_column_domicilioenvio',
            label: 'Domicilio',
            controlType: 'textbox',
            disabled: true
          }
        ]
      }
    },
  ],
  displayedActionsCondition: [
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
    },
    {
      key: 'venta_grid_def_column_accion_venta_generarenvio',
      expression: {
                    key: 'estadoPagoEnvio',
                    value: 'PENDGEN',
                    compare: FILTER_TYPE.EQUALS
                  }
    },
    {
      key: 'venta_grid_def_column_accion_venta_datosenvio',
      expression: {
                    key: 'showDatosEnvios',
                    value: true,
                    compare: FILTER_TYPE.EQUALS
                  }
    }
  ]
};

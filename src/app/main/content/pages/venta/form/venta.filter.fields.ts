export const VENTA_FILTER_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    controlType: 'number'
  },
  {
    key: 'tipo',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_tipo',
    type: 'select',
    controlType: 'select',
    value: '',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: '', nombre: 'Todos'},
                 {id: 'PRODUCTO', nombre: 'Producto'},
                 {id: 'DERECHOANUAL', nombre: 'Derecho Anual'},
                 {id: 'TRAMITE', nombre: 'Trámite'}]
      }
  },
  {
    key: 'estadoPago',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_estadopago',
    type: 'select',
    controlType: 'select',
    value: '',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: '', nombre: 'Todos'},
                 {id: 'PENDIENTE', nombre: 'Pendiente'},
                 {id: 'APROBADA', nombre: 'Aprobada'},
                 {id: 'RECHAZADA', nombre: 'Rechazada'}]
      }
  },
  {
    key: 'estadoPagoEnvio',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_estadopagoenvio',
    type: 'select',
    controlType: 'select',
    value: '',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: '', nombre: 'Todos'},
                 {id: 'PENDGEN', nombre: 'Pendiente de Generación'},
                 {id: 'PENDCOBRO', nombre: 'Pendiente de Cobro'},
                 {id: 'APROBADA', nombre: 'Aprobada'},
                 {id: 'RECHAZADA', nombre: 'Rechazada'},
                 {id: 'NOAPLICA', nombre: 'No Aplica'}]
      }
  },
  {
    key: 'usuario',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_userid',
    label: 'Username',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'email',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_email',
    label: 'Email',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'matricula',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_matricula',
    label: 'Matrícula',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'fechaCompra',
    labelKey: 'VENTA_FILTER_FORM_FIELDS_DEF_FIELD_fechacompra',
    label: 'Fecha Compra',
    type: 'string',
    controlType: 'textbox'
  }
];

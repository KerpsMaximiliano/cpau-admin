export const PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    type: 'hidden',
    controlType: 'hidden'
  },
  {
    key: 'title',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Titulo',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'url',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_url',
    label: 'URL',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 1000
  },
  {
      key: 'linkTarget',
      labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_linktarget',
      type: 'select',
      controlType: 'select',
      required: true,
      value: 0,
      options: {
        handlerSourceData: false,
        elementLabel: 'nombre',
        elementValue: 'id',
        fromData: [{id: 0, nombre: '_self'},
                   {id: 1, nombre: '_blank'},
                   {id: 2, nombre: '_parent'},
                   {id: 3, nombre: '_top'},
                   {id: 4, nombre: '_search'}]
        }
    },
  {
    key: 'header',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_header',
    label: 'Header',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'urlHeader',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_urlHeader',
    label: 'URL',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 1000
  },
  {
    key: 'linkTargetHeader',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_linktargetHeader',
    type: 'select',
    controlType: 'select',
    required: true,
    value: 0,
    options: {
    handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '_parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  {
    key: 'tooltip',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_tooltip',
    label: 'Tooltip',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'description',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_description',
    label: 'Descripci�n',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 8000
  },
  {
    key: 'color',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_color',
    label: 'Color',
    controlType: 'color_picker',
    required: true,
    maxLength: 100
  },
  {
    key: 'textColor',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_textcolor',
    controlType: 'color_picker',
    required: true,
    maxLength: 100
  },
  {
    key: 'imageURL',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_imageurl',
    label: 'Imagen',
    controlType: 'import_image',
    required: true,
    maxLength: 100,
    showPreview: true
  },
  {
    key: 'orden',
    labelKey: 'PRODUCTO_EXTERNO_UPDATE_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'number',
    controlType: 'number',
    required: true,
    minValue: 1,
    minValueMessage: 'La posición debe ser mayor o igual 1',
  }
];

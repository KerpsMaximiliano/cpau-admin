export const PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF = [
  {
    key: 'title',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_title',
    label: 'Title',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'description',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_description',
    label: 'Description',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'url',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_url',
    label: 'URL',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'urlHeader',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_urlheader',
    label: 'URL Header',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'color',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_color',
    label: 'Color',
    type: 'string',
    disabled: true,
    controlType: 'color_picker'
  },
  {
    key: 'textColor',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_textcolor',
    label: 'Text Color',
    type: 'string',
    disabled: true,
    controlType: 'color_picker'
  },
  {
    key: 'imageURL',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_imageurl',
    label: 'Image URL',
    type: 'string',
    disabled: true,
    controlType: 'import_image',
  },
  {
    key: 'tooltip',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_tooltip',
    label: 'Tooltip',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'orden',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'string',
    disabled: true,
    controlType: 'number'
  },
  {
    key: 'linkTarget',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_linktarget',
    label: 'Link Target',
    disabled: true,
    controlType: 'select',
      required: true,
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
    key: 'linkTargetHeader',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_linktargetheader',
    label: 'Link Target Header',
    disabled: true,
    controlType: 'select',
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
    key: 'active',
    labelKey: 'PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF_FIELD_active',
    label: 'Active',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  }
];

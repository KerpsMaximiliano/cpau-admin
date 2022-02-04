export const NOTICIA_CARROUSEL_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'title',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Titulo',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'tooltip',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_tooltip',
    label: 'Tooltip',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'header',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_header',
    label: 'Header',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 100
  },
  {
    key: 'url',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_url',
    label: 'URL',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 1000
  },
  {
    key: 'description',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_description',
    label: 'Descripci�n',
    type: 'string',
    controlType: 'textbox',
    required: true,
    maxLength: 8000
  },
  {
    key: 'color',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_color',
    label: 'Color',
    controlType: 'color_picker',
    required: true,
    maxLength: 100
  },
  {
    key: 'textColor',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_textcolor',
    controlType: 'color_picker',
    required: true,
    maxLength: 100
  },
  {
    key: 'imageURL',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_imageurl',
    label: 'Imagen',
    controlType: 'import_image',
    required: true,
    maxLength: 100,
    showPreview: true
  },
  {
    key: 'orden',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'linkTarget',
    labelKey: 'NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF_FIELD_linktarget',
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
  }
];

export const NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    disabled: true,
    controlType: 'number'
  },
  {
    key: 'noticiaCarrouselId',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_noticiacarrouselid',
    label: 'Id',
    type: 'number',
    disabled: true,
    controlType: 'hidden'
  },
  {
    key: 'title',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_title',
    label: 'Title',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'url',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_url',
    label: 'URL',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'linkTarget',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_linktarget',
    label: 'Link Target',
    disabled: true,
    controlType: 'select',
        required: true,
        value: 0,
        options: {
          handlerSourceData: false,
          elementLabel: 'nombre',
          elementValue: 'id',
          fromData: [{id: 0, nombre: '_self'},
                     {id: 1, nombre: '_blank'},
                     {id: 2, nombre: '_parent'},
                     {id: 3, nombre: '_top'},
                     {id: 4, nombre: '_search'}]
          }
  },
  {
    key: 'tooltip',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_tooltip',
    label: 'Tooltip',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'header',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_header',
    label: 'Header',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'urlHeader',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_urlheader',
    label: 'URL Header',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'linkTargetHeader',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_linktargetheader',
    label: 'Link Target Header',
    type: 'string',
    disabled: true,
    controlType: 'select',
    options: {
    handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '_parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  {
    key: 'description',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_description',
    label: 'Description',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'color',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_color',
    label: 'Color',
    type: 'string',
    disabled: true,
    controlType: 'color_picker',
  },
  {
    key: 'textColor',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_textcolor',
    label: 'Text Color',
    type: 'string',
    disabled: true,
    controlType: 'color_picker',
  },
  {
    key: 'imageURL',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_imageurl',
    label: 'Image URL',
    type: 'string',
    disabled: true,
    controlType: 'import_image'
  },
  {
    key: 'orden',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'createUser',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_createuser',
    label: 'Usuario Creaci�n',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'lastEditUser',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_lastedituser',
    label: 'Usuario Modificaci�n',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'createDate',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_createdate',
    label: 'Fecha Creaci�n',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'lastEditDate',
    labelKey: 'NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF_FIELD_lasteditdate',
    label: 'Fecha Modificaci�n',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  }
];

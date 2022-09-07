export const CONTENIDOS_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'CONTENIDOS_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'hidden',
    controlType: 'hidden'
  },
  {
    key: 'titulo',
    labelKey: 'contenidos_create_form_fields_def_field_titulo',
    label: 'Titulo',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'url',
    labelKey: 'contenidos_create_form_fields_def_field_url',
    label: 'URL',
    controlType: 'import_image',
    maxLength: 500,
    icon: 'attach_file',
    showPreview: true,
  },
  {
    key: 'tipo',
    labelKey: 'contenidos_create_form_fields_def_field_tipo',
    label: 'Tipo',
    type: 'select',
    controlType: 'select',
    required: true,
    value: 0,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: 'Revista'},
                 {id: 1, nombre: 'Info'},
                 ]
      }
  },
  {
    key: 'esNota',
    labelKey: 'contenidos_create_form_fields_def_field_esnota',
    label: 'Es nota',
    type: 'check',
    controlType: 'checkbox'
  },
  {
    key: 'imagen',
    labelKey: 'contenidos_create_form_fields_def_field_imagen',
    label: 'Imagen',
    controlType: 'textbox',
  }
];

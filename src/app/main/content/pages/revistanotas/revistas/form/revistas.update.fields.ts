export const REVISTAS_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'REVISTAS_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'hidden',
    controlType: 'hidden'
  },
  {
    key: 'titulo',
    labelKey: 'revistas_create_form_fields_def_field_titulo',
    label: 'Titulo',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'numero',
    labelKey: 'revistas_create_form_fields_def_field_numero',
    label: 'Numero',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'listIndex',
    labelKey: 'revistas_create_form_fields_def_field_posicion',
    label: 'Posición',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'isPublished',
    labelKey: 'revistas_create_form_fields_def_field_ispublished',
    label: 'isPublished',
    controlType: 'checkbox'
  },

  {
    key: 'tipo',
    labelKey: 'revistas_create_form_fields_def_field_tipo',
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
    key: 'descripcion',
    labelKey: 'revistas_create_form_fields_def_field_descripcion',
    label: 'Descripcion',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'color1',
    labelKey: 'revistas_create_form_fields_def_field_color',
    label: 'Color',
    controlType: 'color_picker',
    value: '#3400ff'
  },

  {
    key: 'imagenTapa',
    labelKey: 'revistas_create_form_fields_def_field_imagentapa',
    label: 'ImagenTapa',
    controlType: 'import_image',
    maxLength: 500,
    icon: 'attach_file',
    showPreview: true,
    required: true
  },
 
  
  {
    key: 'url',
    labelKey: 'revistas_create_form_fields_def_field_url',
    label: 'Url',
    controlType: 'import_image',
    maxLength: 500,
    icon: 'attach_file',
    showPreview: true,
  },
  {
    key: 'issuUrl',
    labelKey: 'revistas_create_form_fields_def_field_issuurl',
    label: 'IssUrl',
    controlType: 'import_image',
    maxLength: 500,
    icon: 'attach_file',
    showPreview: true,
  }
];

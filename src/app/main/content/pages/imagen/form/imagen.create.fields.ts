export const IMAGEN_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'name',
    labelKey: 'imagen_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    minLength: 3,
    maxLength: 200,
    required: true
  },
  {
    key: 'url',
    labelKey: 'imagen_create_form_fields_def_field_url',
    label: 'URL',
    type: 'string',
    controlType: 'import_image',
    maxLength: 200,
    required: true,
    icon: 'add_photo_alternate'
  },
  {
    key: 'epigraph',
    labelKey: 'imagen_create_form_fields_def_field_epigraph',
    label: 'Ep&iacute;grafe',
    type: 'string',
    controlType: 'textbox',
    maxLength: 200,
  }
  
];

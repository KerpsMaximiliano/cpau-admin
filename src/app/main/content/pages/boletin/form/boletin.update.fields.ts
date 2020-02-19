export const BOLETIN_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'BOLETIN_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    id: true,
    controlType: 'hidden'
  },
  {
    key: 'numero',
    labelKey: 'boletin_create_form_fields_def_field_numero',
    controlType: 'number'
  },
  {
    key: 'titulo',
    labelKey: 'boletin_create_form_fields_def_field_titulo',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  },
  {
    key: 'fechaEnvioString',
    labelKey: 'boletin_create_form_fields_def_field_fechaenvio',
    controlType: 'datepicker',
    required: true
  },
  
  {
    key: 'texto1',
    labelKey: 'boletin_create_form_fields_def_field_texto1',
    label: 'Texto 1',
    maxLength: 2000,
    controlType: 'textbox'
  },
  {
    key: 'texto2',
    labelKey: 'boletin_create_form_fields_def_field_texto2',
    label: 'Texto 2',
    maxLength: 2000,
    controlType: 'textbox'
  },
  {
    key: 'texto3',
    labelKey: 'boletin_create_form_fields_def_field_texto3',
    label: 'Texto 3',
    maxLength: 2000,
    controlType: 'textbox'
  },
  {
    key: 'urlContenido',
    labelKey: 'boletin_create_form_fields_def_field_urlcontenido',
    label: 'URL Contenido',
    maxLength: 2000,
    controlType: 'import_image'
  },  
  {
    key: 'publicado',
    labelKey: 'boletin_create_form_fields_def_field_publicado',
    label: 'Publicado',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'especial',
    labelKey: 'boletin_create_form_fields_def_field_especial',
    label: 'Especial',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'notasConCopete',
    labelKey: 'boletin_create_form_fields_def_field_notasconcopete',
    label: 'Notas con Copete',
    type: 'number',
    controlType: 'number',
    required: true
  }
];

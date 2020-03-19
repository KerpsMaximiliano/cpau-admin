function todaynow() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear());
  return  dd + "/" + mm + "/" + yyyy;
}

export const BOLETIN_CREATE_FORM_FIELDS_DEF = [
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
    required: true,
    value : todaynow()
  },
  {
    key: 'urlContenido',
    labelKey: 'boletin_create_form_fields_def_field_urlcontenido',
    label: 'URL Contenido',
    controlType: 'import_image'
  },
  {
    key: 'publicado',
    labelKey: 'boletin_create_form_fields_def_field_publicado',
    label: 'Publicado',
    type: 'boolean',
    controlType: 'checkbox',
    value: true
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
    required: true,
    value: '0'
  },
  
  
];

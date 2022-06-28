export const AUTORES_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'hidden',
    controlType: 'hidden'
  },
  {
    key: 'nombre',
    labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_nombre',
    label: 'Nombre',
    type: 'string',
    required: true,
    controlType: 'textbox'
  },
  {
    key: 'imagenPerfil',
    labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_imagenperfil',
    label: 'Imagen Perfil',
    controlType: 'textbox',
    required: true
  }
];

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
    controlType: 'textbox'
  },
  {
    key: 'imagenPerfil',
    labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_imagenperfil',
    label: 'Imagen Perfil',
    controlType: 'import_image',
    maxLength: 500,
    icon: 'attach_file',
    showPreview: true,
  }
];

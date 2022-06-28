import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const AUTORES_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'nombre',
    labelKey: 'autores_create_form_fields_def_field_nombre',
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

import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECCION_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'newName',
    labelKey: 'seccion_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  }  
];

import { PREFIX_DOMAIN_API } from "environments/environment";

export const REVISTA_CONTENIDOS_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'REVISTA_CONTENIDOS_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    controlType: 'hidden'
  },
  {
    key: 'revistaId',
    labelKey: 'revista_contenidos_create_form_fields_def_field_revistaid',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'listIndex',
    labelKey: 'revista_contenidos_create_form_fields_def_field_listIndex',
    label: 'Posición',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'contenidoId',
    controlType: 'hidden'
  }
];

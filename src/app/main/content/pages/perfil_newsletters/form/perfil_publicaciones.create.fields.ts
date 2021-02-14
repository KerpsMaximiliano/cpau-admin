import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_NEWSLETTERS_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'perfil_NEWSLETTERS_create_form_fields_def_field_idcontactdata',
    label: 'idContact',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'idSuscripcion',
    labelKey: 'perfil_NEWSLETTERS_create_form_fields_def_field_subcripcion',
    controlType: 'select',
    required: true,
    options: {
      elementLabel: 'name',
      elementValue: 'idSuscripcion',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'admin/newsletters',
      }
    }
  },
];
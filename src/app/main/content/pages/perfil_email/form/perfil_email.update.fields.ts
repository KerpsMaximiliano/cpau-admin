import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_EMAIL_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'PERFIL_EMAIL_UPDATE_FORM_FIELDS_DEF_FIELD_idcontactdata',
    label: 'idContact',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'email',
    labelKey: 'PERFIL_EMAIL_UPDATE_FORM_FIELDS_DEF_FIELD_email',
    label: 'Email',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'idTipoEmail',
    labelKey: 'PERFIL_EMAIL_UPDATE_FORM_FIELDS_DEF_FIELD_tipoemail',
    controlType: 'select',
    required: true,
    options: {
      elementLabel: 'nombre',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'siteConsumer/tipoContacto',
      }
    }
  },
];

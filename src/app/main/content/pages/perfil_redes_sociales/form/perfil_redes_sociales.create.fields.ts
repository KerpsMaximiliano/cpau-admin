import { REGEX_KEY_URL } from "app/modules/fwk/core/service/dynamic-form/form.validator.service";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_REDES_SOCIALES_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'perfil_redes_sociales_create_form_fields_def_field_idcontactdata',
    label: 'idContact',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'url',
    labelKey: 'perfil_redes_sociales_create_form_fields_def_field_url',
    label: 'URL',
    type: 'string',
    controlType: 'textbox',
    required: true,
    validation: {
      regexKey: REGEX_KEY_URL
    },
    maxLength: 250
  },
  {
    key: 'idTipoRedSocial',
    labelKey: 'perfil_redes_sociales_create_form_fields_def_field_tiporedsocial',
    controlType: 'select',
    required: true,
    options: {
      elementLabel: 'nombre',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'siteConsumer/redSocial',
      }
    }
  },
];
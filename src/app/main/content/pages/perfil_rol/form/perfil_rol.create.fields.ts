import { REGEX_KEY_URL } from "app/modules/fwk/core/service/dynamic-form/form.validator.service";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_ROL_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'perfil_rol_create_form_fields_def_field_idcontactdata',
    label: 'idContact',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'idUser',
    labelKey: 'perfil_rol_create_form_fields_def_field_idUser',
    label: 'isUser',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'idRole',
    labelKey: 'perfil_rol_create_form_fields_def_field_rol',
    controlType: 'select',
    required: true,
    options: {
      elementLabel: 'name',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'admin/roles',
      }
    }
  },
];
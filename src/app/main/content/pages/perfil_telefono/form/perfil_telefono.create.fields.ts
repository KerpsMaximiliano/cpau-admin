import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_TELEFONO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'PERFIL_TELEFONO_CREATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'idTipoTelefono',
    labelKey: 'PERFIL_TELEFONO_CREATE_FORM_FIELDS_DEF_FIELD_tipoTelefono',
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
  {
    key: 'telefono',
    labelKey: 'PERFIL_TELEFONO_CREATE_FORM_FIELDS_DEF_FIELD_telefono',
    label: 'Teléfono',
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 10,
    controlType: 'textbox'
  },
];

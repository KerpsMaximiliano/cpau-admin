import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_TELEFONO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'idContactData',
    labelKey: 'PERFIL_TELEFONO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'idContactData',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'idTipoTelefono',
    labelKey: 'PERFIL_TELEFONO_UPDATE_FORM_FIELDS_DEF_FIELD_tipoTelefono',
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
    key: 'celufijo',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_clase',
    label: 'Clase',
    type: 'select',
    required: true,
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 'Celular', nombre: 'Celular'},
                 {id: 'Fijo', nombre: 'Fijo'}]
      }
  },
  {
    key: 'telefono',
    labelKey: 'PERFIL_TELEFONO_UPDATE_FORM_FIELDS_DEF_FIELD_telefono',
    label: 'Teléfono',
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 10,
    controlType: 'textbox'
  },
  
];

import { PREFIX_DOMAIN_API } from "environments/environment";

export const BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'boletinId',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_boletinid',
    label: 'Boletin ID',
    controlType: 'hidden'
  },
  {
    key: 'pageId',
    labelKey: 'boletin_contenido_create_form_fields_def_field_pageid',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'name',
      elementValue: 'id',
      fromWs: {
        key: 'boletin_contenido_create_form_fields_def_field_pageid',
        url: PREFIX_DOMAIN_API + 'Boletin/contenido',
      }
    }
    
  },
  {
    key: 'orden',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'number',
    controlType: 'number'
  }
];

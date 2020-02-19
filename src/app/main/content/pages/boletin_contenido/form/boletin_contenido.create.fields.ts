import { PREFIX_DOMAIN_API } from "environments/environment";

export const BOLETIN_CONTENIDO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'boletinId',
    labelKey: 'boletin_contenido_create_form_fields_def_field_boletinid',
    label: 'Boletin ID',
    type: 'hidden',
    controlType: 'hidden',
    mappingQuerystring: true
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
    labelKey: 'boletin_contenido_create_form_fields_def_field_orden',
    label: 'Orden',
    type: 'number',
    controlType: 'number'
  }
];

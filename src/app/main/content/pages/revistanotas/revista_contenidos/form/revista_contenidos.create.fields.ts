import { PREFIX_DOMAIN_API } from "environments/environment";

export const REVISTA_CONTENIDOS_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'revistaId',
    labelKey: 'revista_contenidos_create_form_fields_def_field_revistaid',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'contenido',
    labelKey: 'revista_contenidos_create_form_fields_def_field_contenido',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'contenidoId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        titulo: 'contenido'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Contenidos/GetSelectByProp'
    }
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
  },
];

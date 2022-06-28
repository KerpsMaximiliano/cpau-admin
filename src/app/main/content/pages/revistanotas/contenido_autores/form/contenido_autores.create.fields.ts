import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDO_AUTORES_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'contenidoId',
    labelKey: 'contenido_autores_create_form_fields_def_field_contenidoid',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'autor',
    labelKey: 'contenido_autores_create_form_fields_def_field_autor',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'autorId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        nombre: 'autor'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Autores/GetSelectByProp'
    }
  },

  {
    key: 'autorId',
    controlType: 'hidden'
  },
];

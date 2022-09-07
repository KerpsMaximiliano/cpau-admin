import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDO_TAGS_CREATE_FORM_FIELDS_DEF = [
 {
    key: 'contenidoId',
    labelKey: 'contenido_tags_create_form_fields_def_field_contenidoid',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'tag',
    labelKey: 'contenido_tags_create_form_fields_def_field_tag',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'tagId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        nombre: 'tag'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Tags/GetSelectByProp'
    }
  },

  {
    key: 'tagId',
    controlType: 'hidden'
  },

];

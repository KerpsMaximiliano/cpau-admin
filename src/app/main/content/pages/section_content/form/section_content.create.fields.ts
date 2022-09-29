import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECTION_CONTENT_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'sectionId',
    labelKey: 'section_content_create_form_fields_def_field_sectionid',
    label: 'Sección',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  


  {
    key: 'content',
    labelKey: 'section_content_create_form_fields_def_field_contentid',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'contentId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        title: 'content'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Content/FilterContentByTitle'
    }
  },

  {
    key: 'contentId',
    controlType: 'hidden'
  },

  {
    key: 'displayOrder',
    labelKey: 'section_content_update_form_fields_def_field_displayorder',
    label: 'Orden',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'highlighted',
    labelKey: 'section_content_create_form_fields_def_field_highlighted',
    label: 'Destacado',
    controlType: 'checkbox'
  },
  {
    key: 'tag',
    labelKey: 'section_content_create_form_fields_def_field_tags',
    label: 'Tags',
    controlType: 'tags'
  }
];

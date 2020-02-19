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
    key: 'contentId',
    labelKey: 'section_content_create_form_fields_def_field_contentid',
    controlType: 'select',
    options: {
      elementLabel: 'title',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'Content/GetGrid',
      }
    }
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

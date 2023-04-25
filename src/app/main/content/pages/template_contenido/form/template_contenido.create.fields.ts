import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const TEMPLATE_CONTENIDO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'title',
    labelKey: 'template_contenido_create_form_fields_def_field_title',
    label: 'Titulo',
    type: 'text',
    controlType: 'textbox',
    required:  true,
    minLength: 3,
    maxLength: 100,
  },
  {
    key: 'description',
    labelKey: 'template_contenido_create_form_fields_def_field_description',
    label: 'Descipcion',
    type: 'text',
    controlType: 'textbox',
    minLength: 3,
    maxLength: 300,
  },
  {
    key: 'content',
    labelKey: 'template_contenido_create_form_fields_def_field_content',
    label: 'Contenido',
    type: 'text',
    controlType: HTML_EDITOR
  }
];

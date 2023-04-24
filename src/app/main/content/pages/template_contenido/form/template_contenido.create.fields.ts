import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const TEMPLATE_CONTENIDO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'title',
    labelKey: 'template_contenido_create_form_fields_def_field_title',
    label: 'Titulo',
    type: 'text',
    controlType: 'textbox'
  },
  {
    key: 'description',
    labelKey: 'template_contenido_create_form_fields_def_field_description',
    label: 'Descipcion',
    type: 'text',
    controlType: 'textbox'
  },
  {
    key: 'content',
    labelKey: 'template_contenido_create_form_fields_def_field_content',
    label: 'Contenido',
    type: 'text',
    controlType: HTML_EDITOR
  }
];

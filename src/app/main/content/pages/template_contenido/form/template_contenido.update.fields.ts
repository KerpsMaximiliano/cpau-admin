import { HIDDEN, HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    controlType: HIDDEN
  },
  {
    key: 'title',
    labelKey: 'TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Titulo',
    type: 'text',
    controlType: 'textbox',
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  {
    key: 'description',
    labelKey: 'TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_description',
    label: 'Descipcion',
    type: 'text',
    controlType: 'textbox',
    minLength: 3,
    maxLength: 300,
  },
  {
    key: 'content',
    labelKey: 'TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_content',
    label: 'Contenido',
    type: 'text',
    controlType: HTML_EDITOR
  }
];

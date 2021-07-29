import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MESSAGE_TEMPLATE_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'name',
    labelKey: 'message_template_create_form_fields_def_field_name',
    label: 'Nombre',
    controlType: 'textbox'
  },
  {
    key: 'bccEmailAddresses',
    labelKey: 'message_template_create_form_fields_def_field_bccemailaddresses',
    label: 'BccEmailAddresses',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'subject',
    labelKey: 'message_template_create_form_fields_def_field_subject',
    label: 'Subject',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'body',
    labelKey: 'message_template_create_form_fields_def_field_body',
    label: 'Body',
    type: 'string',
    controlType: HTML_EDITOR
  },
  {
    key: 'isActive',
    labelKey: 'message_template_create_form_fields_def_field_isactive',
    label: 'Is Active',
    value: true,
    controlType: 'hidden'
  },
  {
    key: 'emailAccountId',
    labelKey: 'message_template_create_form_fields_def_field_emailaccountid',
    label: 'EmailAccountId',
    type: 'string',
    value: 1,
    controlType: 'hidden',
  }
];

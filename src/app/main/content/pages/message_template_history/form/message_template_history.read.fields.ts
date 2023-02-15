import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    disabled: true,
    controlType: 'hidden'
  },
  {
    key: 'messageTemplateId',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_messagetemplateid',
    label: 'Id',
    type: 'number',
    disabled: true,
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'bccEmailAddresses',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_bccemailaddresses',
    label: 'BCC Email',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'isActive',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_isactive',
    label: 'Activo',
    type: 'string',
    disabled: true,
    controlType: 'checkbox'
  },
  {
    key: 'body',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_body',
    label: 'Body',
    type: 'string',
    disabled: true,
    controlType: HTML_EDITOR
  },
  {
    key: 'EmailAccountId',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF_FIELD_emailaccountid',
    label: 'email account',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  }
];

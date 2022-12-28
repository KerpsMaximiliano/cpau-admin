import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    controlType: 'hidden'
  },
  {
    key: 'messageTemplateId',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_messagetemplateid',
    label: 'Id',
    type: 'number',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'bccEmailAddresses',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_bccemailaddresses',
    label: 'BCC Email',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'isActive',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_isactive',
    label: 'Activo',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'body',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_body',
    label: 'Body',
    type: 'string',
    controlType: HTML_EDITOR
  },
  {
    key: 'EmailAccountId',
    labelKey: 'MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF_FIELD_emailaccountid',
    label: 'email account',
    type: 'string',
    controlType: 'textbox'
  }
];

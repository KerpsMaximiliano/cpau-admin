import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'Id',
    type: 'number',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    controlType: 'textbox'
  },
  {
    key: 'bccEmailAddresses',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_bccemailaddresses',
    label: 'BccEmailAddresses',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'subject',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_subject',
    label: 'Subject',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'body',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_body',
    label: 'Body',
    type: 'string',
    controlType: HTML_EDITOR
  },
  {
    key: 'isActive',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_isactive',
    label: 'Is Active',
    controlType: 'checkbox'
  },
  {
    key: 'emailAccountId',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_emailaccountid',
    label: 'EmailAccountId',
    type: 'string',
    value: 1,
    controlType: 'textbox',
    readonly: true
  }
];

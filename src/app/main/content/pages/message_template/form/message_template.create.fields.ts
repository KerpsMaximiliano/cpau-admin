import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const MESSAGE_TEMPLATE_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'name',
    labelKey: 'message_template_create_form_fields_def_field_name',
    label: 'Nombre',
    controlType: 'textbox'
  },
  {
    key: 'accountList',
    labelKey: 'message_template_create_form_fields_def_field_emailaccountid',
    label: 'Cuenta',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'emailAccountId',
      elementLabel: 'friendlyName',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        title: 'accountList'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'EmailAccount/accounts'
    }
  },
  {
    key: 'emailAccountId',
    controlType: 'hidden'
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
  // {
  //   key: 'body',
  //   labelKey: 'message_template_create_form_fields_def_field_body',
  //   label: 'Body',
  //   type: 'string',
  //   controlType: HTML_EDITOR
  // },
  {
    key: 'isActive',
    labelKey: 'message_template_create_form_fields_def_field_isactive',
    label: 'Is Active',
    value: true,
    controlType: 'hidden'
  }
];

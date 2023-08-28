import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

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
    key: 'accountList',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_emailaccountid',
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
    key: 'isActive',
    labelKey: 'MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF_FIELD_isactive',
    label: 'Is Active',
    controlType: 'checkbox'
  }
];

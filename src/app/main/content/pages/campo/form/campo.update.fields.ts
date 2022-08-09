import { PREFIX_DOMAIN_API } from 'environments/environment';

export const CAMPO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'idFormField',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'idForm',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_idform',
    label: 'ID Form',
    type: 'text',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'name',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'type',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_type',
    label: 'Tipo',
    controlType: 'select',
    required: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'label',
      elementValue: 'value',
      fromData: [
                 {value: 'text', label: 'Text'},
                 {value: 'label', label: 'Etiqueta'},
                 {value: 'email', label: 'E-Mail'},
                 {value: 'password', label: 'Password'},
                 {value: 'radio', label: 'Radio Buttons'},
                 {value: 'dropdown', label: 'Desplegable'},
                 {value: 'textarea', label: 'Text Area'},
                 {value: 'checkbox', label: 'Checkbox'},
                 {value: 'hidden', label: 'Oculto'}
                ]              
    }
  },
  {
    key: 'value',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_value',
    label: 'Valor',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'required',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_required',
    label: 'Requerido',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'dependentField',
    labelKey: 'campo_update_form_fields_def_field_dependentField',
    label: 'Campo del cual depende',
    controlType: 'autocomplete-desplegable',
    options: {
      transferIdToField: 'dependentFieldId',
      elementLabel: 'name',
      elementValue: 'idFormField',
      useNativeFilter: false,
      useFormSenderFilter: true,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
      idForm: 'idForm'
    },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'FormField'
    }
    
  },
  {
    key: 'dependentValue',
    labelKey: 'campo_update_form_fields_def_field_dependentValue',
    label: 'Valor necesario',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'dependentFieldId',
    controlType: 'hidden'
  },
];

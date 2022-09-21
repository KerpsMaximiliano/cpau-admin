import { PREFIX_DOMAIN_API } from 'environments/environment';

export const CAMPO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idForm',
    labelKey: 'campo_create_form_fields_def_field_idform',
    label: 'ID Form',
    type: 'text',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'name',
    labelKey: 'campo_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'type',
    labelKey: 'campo_create_form_fields_def_field_type',
    label: 'Tipo',
    type: 'select',
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
    labelKey: 'campo_create_form_fields_def_field_value',
    label: 'Valor',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'required',
    labelKey: 'campo_create_form_fields_def_field_required',
    label: 'Requerido',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'position',
    labelKey: 'campo_create_form_fields_def_field_position',
    label: 'Posición',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'dependentField',
    labelKey: 'campo_create_form_fields_def_field_dependentField',
    label: 'Campo del cual depende',
    controlType: 'autocomplete-desplegable',
    options: {
      transferIdToField: 'dependentFieldId',
      elementLabel: 'name',
      elementValue: 'idFormField',
      useNativeFilter: false,
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
    labelKey: 'campo_create_form_fields_def_field_dependentValue',
    label: 'Valor necesario',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'dependentFieldId',
    controlType: 'hidden'
  },

];

import { HEADER, RADIO_BUTTON } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const FORMULARIO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'FORMULARIO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    type: 'string',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'formulario_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    maxLength: 200,
    required: true,
    cssClass: 'formulario_name'
  },
  
  {
    key: 'remarks',
    labelKey: 'formulario_create_form_fields_def_field_remarks',
    label: 'Aclaraciones',
    type: 'string',
    controlType: 'textbox',
    maxLength: 1000,
    cssClass: 'formulario_remarks'
  },
  
  {
    key: 'minQuota',
    labelKey: 'formulario_create_form_fields_def_field_minquota',
    type: 'number',
    controlType: 'number',
    required: true,
    cssClass: 'formulario_minquota'
  },
  {
    key: 'quota',
    labelKey: 'formulario_create_form_fields_def_field_quota',
    label: 'Cupo (0 \u003d sin cupo)',
    type: 'number',
    controlType: 'number',
    required: true,
    cssClass: 'formulario_quota'
  },
  {
    key: 'allowQueue',
    labelKey: 'formulario_create_form_fields_def_field_allowqueue',
    label: 'Lista de Espera',
    type: 'boolean',
    controlType: 'checkbox',
    cssClass: 'formulario_allowqueue'
  },
  {
    key: 'fromDateString',
    labelKey: 'formulario_create_form_fields_def_field_fromdate',
    label: 'Fecha Desde',
    // controlType: 'datepicker',
    controlType: 'datetimepicker',
    required: true,
    cssClass: 'formulario_fromdate'
  },
  {
    key: 'toDateString',
    labelKey: 'formulario_create_form_fields_def_field_todate',
    label: 'Fecha Hasta',
    // controlType: 'datepicker',
    controlType: 'datetimepicker',
    required: true,
    cssClass: 'formulario_todate'
  },
  {
    key: 'showTitle',
    labelKey: 'formulario_create_form_fields_def_field_showtitle',
    type: 'boolean',
    controlType: 'checkbox',
    cssClass: 'formulario_showtitle'
  },
  {
    key: 'headerImage',
    labelKey: 'formulario_create_form_fields_def_field_headerimage',
    label: 'Imagen de Cabecera',
    controlType: 'import_image',
    options: {
      // => https://ckeditor.com/docs/ckfinder/ckfinder3/#!/api/CKFinder.Config-cfg-resourceType
      resourceType: 'Images'
    },
    showPreview: true,
    cssClass: 'formulario_headerimage'
  },
  {
    key: 'place',
    labelKey: 'formulario_create_form_fields_def_field_place',
    label: 'Lugar',
    type: 'string',
    controlType: 'textbox',
    maxLength: 4000,
    cssClass: 'formulario_place'
  },
  {
    key: 'dateString',
    labelKey: 'formulario_create_form_fields_def_field_date',
    label: 'Fecha',
    // controlType: 'datepicker',
    controlType: 'datetimepicker',
    cssClass: 'formulario_date'
  },
  {
    key: 'contact',
    labelKey: 'formulario_create_form_fields_def_field_contact',
    label: 'Contacto',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
    cssClass: 'formulario_contact'
  },
  {
    key: 'isCurso',
    labelKey: 'formulario_create_form_fields_def_field_isCurso',
    label: 'Es curso',
    type: 'boolean',
    controlType: 'checkbox',
    cssClass: 'formulario_isCurso'
  },
  {
    key: 'templateRecordatorio',
    labelKey: 'formulario_create_form_fields_def_field_SelectedRecordatorioTemplate',
    label: 'Template Recordatorio',
    controlType: 'autocomplete-desplegable',
    required: false,
    options: {
      transferIdToField: 'templateRecordatorioId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'templateRecordatorio'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'MessageTemplate/FilterMessageTemplateByName'
    }
  },
  {
    key: 'templateRecordatorioId',
    controlType: 'hidden'
  },

  {
    key: 'templateInscripcion',
    labelKey: 'formulario_create_form_fields_def_field_SelectedInscripcionTemplate',
    label: 'Template Inscripción',
    controlType: 'autocomplete-desplegable',
    required: false,
    options: {
      transferIdToField: 'templateInscripcionId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'templateInscripcion'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'MessageTemplate/FilterMessageTemplateByName'
    }
  },
  {
    key: 'templateInscripcionId',
    controlType: 'hidden'
  },

  {
    key: 'templateEspera',
    labelKey: 'formulario_create_form_fields_def_field_SelectedEsperaTemplate',
    label: 'Template Inscripción',
    controlType: 'autocomplete-desplegable',
    required: false,
    options: {
      transferIdToField: 'templateEsperaId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'templateEspera'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'MessageTemplate/FilterMessageTemplateByName'
    }
  },
  {
    key: 'templateEsperaId',
    controlType: 'hidden'
  },

  {
    key: 'templateConfirmacion',
    labelKey: 'formulario_create_form_fields_def_field_SelectedConfirmacionTemplate',
    label: 'Template Confirmación',
    controlType: 'autocomplete-desplegable',
    required: false,
    options: {
      transferIdToField: 'templateConfirmacionId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'templateConfirmacion'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'MessageTemplate/FilterMessageTemplateByName'
    }
  },
  {
    key: 'templateConfirmacionId',
    controlType: 'hidden'
  },
  
  {
    key: 'agenda_title',
    labelKey: 'Nivel de Acceso',
    title: 'Nivel de Acceso',
    controlType: HEADER
  },
  {
    key: 'nivelAcceso',
    labelKey: 'Tipos de Usuarios',
    controlType: 'select',
    value: 'A',
    options: {
      handlerSourceData: false,
      elementLabel: 'label',
      elementValue: 'value',
      fromData: [ 
        {value: 'A', label: 'Anonimo' },
        {value: 'R', label: 'Registrado' }
      ]
    }
  },
  {
    key: 'accesoNoMatriculado',
    labelKey: 'Acceso No Matriculado',
    type: 'check',
    controlType: 'checkbox',
  },
  {
    key: 'accesoMatriculado',
    labelKey: 'Acceso Matriculado',
    type: 'check',
    controlType: 'checkbox',
  },
  {
    key: 'estadosMatricula',
    labelKey: 'Destinatarios',
    controlType: 'select',
    value: 'A',
    options: {
      handlerSourceData: false,
      elementLabel: 'label',
      elementValue: 'value',
      fromData: [ 
        {value: 'T', label: 'Todos' },
        {value: 'A', label: 'Activos' },
        {value: 'N', label: 'No Activos' },
        {value: 'S', label: 'Por Estado' }
      ]
    }
  },

  {
    key: 'estadosSeleccionados',
    labelKey: 'Seleccionados',
    controlType: 'simple-pick-list',
    options: {
      compositeKey: ['id'],
      elementLabel: 'nombre',
      titleFrom: 'Matriculados por Estado',
      titleTo: 'Seleccionados',
      fromWs: {
          key: 'matriculados_estado_ws',
          url: PREFIX_DOMAIN_API + 'MatriculadoEstado'
      }
  }
  }
];

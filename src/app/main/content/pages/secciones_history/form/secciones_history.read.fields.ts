import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECCIONES_HISTORY_READ_FORM_FIELDS_DEF = [
  {
    key: 'listIndex',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_listindex',
    label: 'Orden',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'name',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'seName',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_sename',
    label: 'Ruta',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'title',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_title',
    label: 'Titulo',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'link',
    labelKey: 'secciones_history_grid_def_column_link',
    label: 'Link',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'linkTarget',
    labelKey: 'secciones_history_read_form_fields_def_field_linktarget',
    label: 'LinkTarget',
    type: 'select',
    required: true,
    controlType: 'select',
    disabled: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '_parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  {
    key: 'image',
    labelKey: 'secciones_history_create_form_fields_def_field_image',
    controlType: 'autocomplete-desplegable',
    required: false,
    disabled: true,
    options: {
      transferIdToField: 'imageId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'image'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Image/GetSelectByProp'
    }
  },
  {
    key: 'imageId',
    controlType: 'hidden'
  },
  {
    key: 'published',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_published',
    label: 'Publicada',
    disabled: true,
    controlType: 'checkbox'
  },
  {
    key: 'allowAnonymous',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_allowanonymous',
    label: 'Publica',
    type: 'string',
    disabled: true,
    controlType: 'checkbox'
  },
  {
    key: 'templateId',
    labelKey: 'secciones_history_grid_def_column_templateid',
    label: 'Template',
    required: true,
    controlType: 'select',
    disabled: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 1, nombre: 'Agenda'},
                 {id: 6, nombre: 'Agenda con Tags'},
                 {id: 2, nombre: 'Noticias con Imagen'},
                 {id: 3, nombre: 'Beneficios'},
                 {id: 4, nombre: 'Noticias sin Imagen'},
                 {id: 5, nombre: 'Noticias sin Imagen sin Filtro'},
                 {id: 7, nombre: 'Noticias con Imagen sin Filtro'}
                ]              
    }
  },
  {
    key: 'orderItemsBy',
    labelKey: 'secciones_history_grid_def_column_orderitemsby',
    label: 'Ordernar Items por',
    controlType: 'select',
    disabled: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [
          {id: 0, nombre: 'Manual'},
          {id: 1, nombre: 'Fecha Publicación (Nuevo->Viejo)'},
          {id: 2, nombre: 'Fecha Publicación (Viejo->Nuevo)'},
          {id: 3, nombre: 'Título(A->Z)'},
          {id: 4, nombre: 'Título(Z->A)'},
          {id: 5, nombre: 'Fecha Evento (Actuales->Próximos)'},
          {id: 6, nombre: 'Fecha Evento (Próximos->Actuales)'}
        ]
    }
  },
  {
    key: 'filterDate',
    labelKey: 'secciones_history_grid_def_column_filterdate',
    label: 'FilterDate',
    type: 'select',
    required: false,
    controlType: 'select',
    disabled: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: 'Hoy'},
                 {id: 1, nombre: 'Esta semana'},
                 {id: 2, nombre: 'Este Mes'},
                 {id: 3, nombre: 'Este año'},
                 {id: 4, nombre: 'Últimos Dos años'},
                 {id: 5, nombre: 'Todos'}]

      }
  },
  {
    key: 'contactName',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_nombre_contacto',
    label: 'Fecha Modificacion',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'contactEmail',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_contactemail',
    label: 'Email Contacto',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'contactTel',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_contacttel',
    label: 'Telefono Contacto',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'policy',
    labelKey: 'SECCIONES_HISTORY_READ_FORM_FIELDS_DEF_FIELD_politicas',
    controlType: HTML_EDITOR
  }
];

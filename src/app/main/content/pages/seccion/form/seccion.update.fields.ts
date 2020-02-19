import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECCION_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    id: true,
    controlType: 'hidden',
    labelKey: '',
    label: '',
  },
  {
    key: 'parentId',
    labelKey: '',
    label: '',
    controlType: 'hidden'
  },
  {
    key: 'listIndex',
    labelKey: '',
    label: '',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  },
  {
    key: 'seName',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_sename',
    label: 'Ruta',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
    required: false
  },
  
  /*{
    key: 'link',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_url',
    label: 'Link',
    type: 'string',
    controlType: 'textbox',
    maxLength: 300,
    required: false
  },*/
  {
    key: 'link',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_url',
    label: 'Link',
    type: 'string',
    controlType: 'import_image',
    required: false
  },
  {
    key: 'linkTarget',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_linktarget',
    label: 'LinkTarget',
    type: 'select',
    required: true,
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '__parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  
  {
    key: 'title',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Ruta',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
    required: false
  },
  {
    key: 'imageId',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_imageid',
    controlType: 'select',
    label: 'Imagen',
    options: {
      elementLabel: 'name',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'Image',
      }
    }
  },

  {
    key: 'published',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_published',
    label: 'Publicada',
    type: 'checkbox',
    controlType: 'checkbox'
  },
  {
    key: 'allowAnonymous',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_allowanonymous',
    label: 'Pública',
    type: 'checkbox',
    controlType: 'checkbox'
  },
  {
    key: 'templateId',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_templateid',
    label: 'Template',
    required: true,
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 1, nombre: 'Agenda'},
                 {id: 2, nombre: 'Noticias con Imagen'},
                 {id: 3, nombre: 'Beneficios'}]              
    }
  },
  {
    key: 'orderItemsBy',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_orderitemsby',
    label: 'Ordernar Items por',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: 'Manual'},
        {id: 1, nombre: 'Fecha Publicación (Nuevo->Viejo)'},
        {id: 2, nombre: 'Fecha Publicación (Viejo->Nuevo)'},
        {id: 3, nombre: 'Título(A->Z)'},
        {id: 4, nombre: 'Título(Z->A)'}
        ]
    }
  },
  {
    key: 'contactName',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContactName',
    controlType: 'textbox',
    maxLength: 500,
  },
  {
    key: 'contactEmail',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContactEmail',
    controlType: 'email',
    maxLength: 500,
  },
  {
    key: 'contanctTel',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContanctTel',
    controlType: 'textbox',
    maxLength: 500,
  },
  {
    key: 'policy',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_Policy',
    controlType: 'textbox',
    maxLength: 500,
  },
];

import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENT_IMAGE_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'contentId',
    labelKey: 'content_image_create_form_fields_def_field_contentid',
    label: 'ContentID',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  {
    key: 'imageId',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_imageid',
    controlType: 'select',
    options: {
      elementLabel: 'name',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'Image',
      }
    }
  },
  {
    key: 'typeId',
    labelKey: 'content_image_create_form_fields_def_field_typeid',
    label: 'Tipo',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 1, nombre: 'Predeterminada'},
                 {id: 2, nombre: 'Boletin'},
                 {id: 3, nombre: 'RSS'},
                 {id: 4, nombre: 'Noticia'},
                ]
      }
  }
];

import { PREFIX_DOMAIN_API } from "environments/environment";

export const PRODUCTO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'idCategoria',
    labelKey: 'producto_create_form_fields_def_field_categoria',
    controlType: 'select',
    required: true,
    options: {
      elementLabel: 'nombre',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'categoria',
      }
    }
  },
  {
    key: 'orden',
    labelKey: 'producto_create_form_fields_def_field_orden',
    label: 'Orden',
    controlType: 'number',
    required: true
  },
  {
    key: 'nombre',
    labelKey: 'producto_create_form_fields_def_field_nombre',
    label: 'Nombre',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  },
  {
    key: 'descripcion',
    labelKey: 'producto_create_form_fields_def_field_descripcion',
    label: 'Descripcion',
    controlType: 'textbox',
    maxLength: 400,
    required: true
  },
  {
    key: 'precio',
    labelKey: 'producto_create_form_fields_def_field_precio',
    label: 'Precio',
    controlType: 'number',
    maxLength: 10,
    required: true
  },
  {
    key: 'precioMatriculadoActivo',
    labelKey: 'producto_create_form_fields_def_field_preciomatriculadoactivo',
    label: 'Precio Matriculado Activo',
    controlType: 'number',
    maxLength: 10,
    required: true
  },
  {
    key: 'enviable',
    labelKey: 'producto_create_form_fields_def_field_enviable',
    label: 'Permite Envio',
    controlType: 'checkbox'
  },
  {
    key: 'publicado',
    labelKey: 'producto_create_form_fields_def_field_publicado',
    label: 'Publicado',
    type: 'string',
    controlType: 'checkbox'
  },
  {
    key: 'notificaciones',
    labelKey: 'producto_create_form_fields_def_field_notificaciones',
    label: 'Notificaciones',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  },
  
  

  {
    key: 'Imagen',
    labelKey: 'producto_create_form_fields_def_field_imagen',
    label: 'Imagen',
    controlType: 'import_image',
    //required: true,
    minLength: 3,
    maxLength: 200,
    options: {
      // => https://ckeditor.com/docs/ckfinder/ckfinder3/#!/api/CKFinder.Config-cfg-resourceType
      resourceType: 'Images'
    },
    showPreview: true
  },
  
  // {
  //   key: 'temporal',
  //   labelKey: 'producto_create_form_fields_def_field_temporal',
  //   type: 'string',
  //   controlType: 'checkbox'
  // }
];

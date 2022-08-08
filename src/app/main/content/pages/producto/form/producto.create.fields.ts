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
  }
];

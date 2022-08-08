import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const PRODUCTO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'producto_grid_def_column_id'
    },
    {
      columnDef: 'nombre',
      columnNameKey: 'producto_grid_def_column_nombre'
    },
    {
      columnDef: 'descripcion',
      columnNameKey: 'producto_grid_def_column_descripcion'
    },
    {
      columnDef: 'descripcionLarga',
      columnNameKey: 'producto_grid_def_column_descripcionlarga'
    },
    {
      columnDef: 'imagen',
      columnNameKey: 'producto_grid_def_column_imagen'
    },
    {
      columnDef: 'categoria',
      columnNameKey: 'producto_grid_def_column_categoria'
    },
    {
      columnDef: 'precio',
      columnNameKey: 'producto_grid_def_column_precio'
    },
    {
      columnDef: 'precioMatriculadoActivo',
      columnNameKey: 'producto_grid_def_column_preciomatriculadoactivo'
    },
    {
      columnDef: 'enviable',
      columnNameKey: 'producto_grid_def_column_enviable'
    },
    {
      columnDef: 'publicado',
      columnNameKey: 'producto_grid_def_column_publicado'
    },
    {
      columnDef: 'temporal',
      columnNameKey: 'producto_grid_def_column_temporal'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'nombre',
    'categoria',
    'precio',
    'precioMatriculadoActivo',
    'enviable',
    'publicado',
    'temporal'
  ],
  actions: [
    {
      actionNameKey: 'producto_grid_def_button_action_uploadPhoto',
      icon: 'photo',
      form: [
        {
          key: 'imagen',
          labelKey: 'foto_contacto',
          label: 'foto_contacto',
          type: 'image_preview_src',
          controlType: 'image_preview_src',
        },
        {               
          key: 'imagen',
          labelKey: 'Foto (solo jpg)',
          controlType: 'file'
        },
        {               
          key: 'id',
          controlType: 'hidden',
        },
      ],
      ws: {
        key: 'producto_grid_def_button_action_uploadPhoto',
        url: PREFIX_DOMAIN_API + 'producto/saveimage',
        method: 'POST'
      }
    },
    {
      actionNameKey: 'producto_grid_def_button_action_descripcionLarga',
      icon: 'notes',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'descripcionLarga',
            labelKey: 'producto_grid_def_button_action_descripcionLarga',
            label: 'Descripción Larga',
            controlType: HTML_EDITOR,
            maxLength: 8000
          }
        ]
      },
      ws: {
        key: 'contenido_grid_def_button_action_resumen',
        url: PREFIX_DOMAIN_API + 'producto/UpdateByProps',
        method: 'PUT'
      }
    }
  ]
};

import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDOS_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      key: true,
      columnNameKey: 'contenidos_grid_def_column_id'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'contenidos_grid_def_column_titulo'
    },
    {
      columnDef: 'tituloSe',
      columnNameKey: 'contenidos_grid_def_column_titulose'
    },
    {
      columnDef: 'texto',
      columnNameKey: 'contenidos_grid_def_column_texto'
    },
    {
      columnDef: 'url',
      columnNameKey: 'contenidos_grid_def_column_url'
    },
    {
      columnDef: 'esNota',
      columnNameKey: 'contenidos_grid_def_column_esNota'
    },
    {
      columnDef: 'urlTarget',
      columnNameKey: 'contenidos_grid_def_column_urltarget'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'contenidos_grid_def_column_tipo'
    },
    {
      columnDef: 'tipoString',
      columnNameKey: 'contenidos_grid_def_column_tipo'
    },
    {
      columnDef: 'imagen',
      columnNameKey: 'contenidos_grid_def_column_imagen'
    },
    {
      columnDef: 'imagenes',
      columnNameKey: 'contenidos_grid_def_column_imagenes'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'titulo',
    'tipoString'
  ],
  actions: [
    {
      actionNameKey: 'contenidos_grid_def_column_texto',
      icon: 'article',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'texto',
            labelKey: 'contenidos_grid_def_column_texto',
            label: 'Texto',
            controlType: HTML_EDITOR,
            maxLength: 8000
          }
        ]
      },
      ws: {
        key: 'contenidos_grid_def_column_texto',
        url: PREFIX_DOMAIN_API + 'Contenidos/UpdateTexto',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'contenidos_create_form_fields_def_field_tags',
      actionType: 'redirect',
      redirect: {
        url: '/ContenidoTags',
        querystring: {
          contenidoId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'style'
    },
    {
      actionNameKey: 'contenidos_create_form_fields_def_field_autores',
      actionType: 'redirect',
      redirect: {
        url: '/ContenidoAutores',
        querystring: {
          contenidoId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'people'
    },
  ]
};

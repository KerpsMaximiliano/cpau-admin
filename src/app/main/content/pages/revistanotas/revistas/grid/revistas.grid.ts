import { HTML_EDITOR, TEXTAREA } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const REVISTAS_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'revistas_grid_def_column_id'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'revistas_grid_def_column_titulo'
    },
    {
      columnDef: 'numero',
      columnNameKey: 'revistas_grid_def_column_numero'
    },
    {
      columnDef: 'descripcion',
      columnNameKey: 'revistas_grid_def_column_descripcion'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'revistas_grid_def_column_tipo'
    },
    {
      columnDef: 'tipoString',
      columnNameKey: 'revistas_grid_def_column_tipo'
    },
    {
      columnDef: 'imagenTapa',
      columnNameKey: 'revistas_grid_def_column_imagentapa'
    },
    {
      columnDef: 'html',
      columnNameKey: 'revistas_grid_def_column_html'
    },
    {
      columnDef: 'color',
      columnNameKey: 'revistas_grid_def_column_color'
    },
    {
      columnDef: 'url',
      columnNameKey: 'revistas_grid_def_column_url'
    },
    {
      columnDef: 'issuUrl',
      columnNameKey: 'revistas_grid_def_column_issuurl'
    },
    {
      columnDef: 'isPublished',
      columnNameKey: 'revistas_grid_def_column_ispublished'
    },
    {
      columnDef: 'numeroNro',
      columnNameKey: 'revistas_grid_def_column_numero'
    },
    {
      columnDef: 'listIndex',
      columnNameKey: 'revistas_grid_def_column_posicion'
    }
  ],
  deleteAction: true,
  groupActions: true,
  sortAllColumns: true,
  displayedColumns: [
    'numeroNro',
    'tipoString',
    'titulo',
    'isPublished',
    'listIndex'
  ],
  actions: [
    {
      actionNameKey: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa',
      icon: 'description',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'html',
            labelKey: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa',
            label: 'HTML',
            controlType: HTML_EDITOR
          }
        ]
      },
      ws: {
        key: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa',
        url: PREFIX_DOMAIN_API + 'Revistas/UpdateTapa',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa_text',
      icon: 'note',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'html',
            labelKey: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa',
            label: 'HTML',
            controlType: TEXTAREA
          }
        ]
      },
      ws: {
        key: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_tapa',
        url: PREFIX_DOMAIN_API + 'Revistas/UpdateTapa',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'revistas_UPDATE_FORM_FIELDS_DEF_FIELD_contenidos',
      actionType: 'redirect',
      redirect: {
        url: '/RevistaContenidos',
        querystring: {
          revistaId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'style'
    },
  ]
};

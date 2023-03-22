import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDOS_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'contenidos_history_grid_def_column_id'
    },
    {
      columnDef: 'contenidoId',
      columnNameKey: 'contenidos_history_grid_def_column_contenidoid'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'contenidos_history_grid_def_column_titulo'
    },
    {
      columnDef: 'url',
      columnNameKey: 'contenidos_history_grid_def_column_url'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'contenidos_history_grid_def_column_tipo'
    },
    {
      columnDef: 'tipoString',
      columnNameKey: 'contenidos_history_grid_def_column_tipo'
    },
    {
      columnDef: 'esNota',
      columnNameKey: 'contenidos_history_grid_def_column_esnota'
    },
    {
      columnDef: 'imagen',
      columnNameKey: 'contenidos_history_grid_def_column_imagen'
    },
    {
      columnDef: 'texto',
      columnNameKey: 'contenidos_history_grid_def_column_texto'
    },
    {
      columnDef: 'usuarioUltimaModificacion',
      columnNameKey: 'contenidos_history_grid_def_column_usuarioultimamodificacion'
    },
    {
      columnDef: 'fechaUltimaModificacionString',
      columnNameKey: 'contenidos_history_grid_def_column_fechaultimamodificacionstring'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'titulo',
    'url',
    'tipoString',
    'esNota',
    'imagen',
    'usuarioUltimaModificacion',
    'fechaUltimaModificacionString'
  ],
  actions : [
    {
      actionNameKey: 'contenidos_history_grid_def_column_texto',
      icon: 'article',
      formDef: {
        showSubmitButton: false,
        fields:[
          {
            key: 'texto',
            labelKey: 'contenidos_history_grid_def_column_texto',
            label: 'Texto',
            controlType: HTML_EDITOR
          }
        ]
      }
    },
    {
      actionNameKey: 'contenidos_history_grid_def_column_restoreversion',
      icon: 'repartition',
      actionSecurity: 'RN_CONTENIDOS_HISTORY_RESTORE_VERSION',
      confirm: true,
      ws: {
        key: 'contenidos_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'Contenidos/RestoreVersion',
        method: 'PUT'
      }
    },
  ]
};

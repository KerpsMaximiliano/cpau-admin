import { PREFIX_DOMAIN_API } from "environments/environment";

export const PRODUCTO_EXTERNO_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'producto_externo_history_grid_def_column_id',
      id: true
    },
    {
      columnDef: 'productoExternoId',
      columnNameKey: 'producto_externo_history_grid_def_column_productoexternoid'
    },
    {
      columnDef: 'title',
      columnNameKey: 'producto_externo_history_grid_def_column_title'
    },
    {
      columnDef: 'description',
      columnNameKey: 'producto_externo_history_grid_def_column_description'
    },
    {
      columnDef: 'url',
      columnNameKey: 'producto_externo_history_grid_def_column_url'
    },
    {
      columnDef: 'urlHeader',
      columnNameKey: 'producto_externo_history_grid_def_column_urlheader'
    },
    {
      columnDef: 'color',
      columnNameKey: 'producto_externo_history_grid_def_column_color'
    },
    {
      columnDef: 'textColor',
      columnNameKey: 'producto_externo_history_grid_def_column_textcolor'
    },
    {
      columnDef: 'imageURL',
      columnNameKey: 'producto_externo_history_grid_def_column_imageurl'
    },
    {
      columnDef: 'tooltip',
      columnNameKey: 'producto_externo_history_grid_def_column_tooltip'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'producto_externo_history_grid_def_column_orden'
    },
    {
      columnDef: 'linkTarget',
      columnNameKey: 'producto_externo_history_grid_def_column_linktarget'
    },
    {
      columnDef: 'linkTargetHeader',
      columnNameKey: 'producto_externo_history_grid_def_column_linktargetheader'
    },
    {
      columnDef: 'active',
      columnNameKey: 'producto_externo_history_grid_def_column_active'
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'producto_externo_history_grid_def_column_createuser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'producto_externo_history_grid_def_column_lastedituser'
    },
    {
      columnDef: 'createDate',
      columnNameKey: 'producto_externo_history_grid_def_column_createdate'
    },
    {
      columnDef: 'lastEditDate',
      columnNameKey: 'producto_externo_history_grid_def_column_lasteditdate'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'producto_externo_history_grid_def_column_lasteditdate'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'lastEditDateString'
  ],
  actions : [
    {
      actionNameKey: 'producto_externo_history_grid_def_column_restoreversion',
      icon: 'repartition',
      confirm: true,
      ws: {
        key: 'contenidos_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'ExternalProduct/RestoreVersion',
        method: 'PUT'
      }
    }
  ]
};

import { PREFIX_DOMAIN_API } from "environments/environment";

export const NOTICIA_CARROUSEL_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_id'
    },
    {
      columnDef: 'noticiaCarrouselId',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_noticiacarrouselid'
    },
    {
      columnDef: 'title',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_title'
    },
    {
      columnDef: 'url',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_url'
    },
    {
      columnDef: 'linkTarget',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_linktarget'
    },
    {
      columnDef: 'tooltip',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_tooltip'
    },
    {
      columnDef: 'header',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_header'
    },
    {
      columnDef: 'urlHeader',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_urlheader'
    },
    {
      columnDef: 'linkTargetHeader',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_linktargetheader'
    },
    {
      columnDef: 'description',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_description'
    },
    {
      columnDef: 'color',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_color'
    },
    {
      columnDef: 'textColor',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_textcolor'
    },
    {
      columnDef: 'imageURL',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_imageurl'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_orden'
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_createuser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_lastedituser'
    },
    {
      columnDef: 'createDate',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_createdate'
    },
    {
      columnDef: 'lastEditDate',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_lasteditdate'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'noticia_carrousel_history_grid_def_column_lasteditdate'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'lastEditDateString'
  ],
  actions : [
    {
      actionNameKey: 'noticia_carrousel_history_grid_def_column_restoreversion',
      icon: 'repartition',
      confirm: true,
      ws: {
        key: 'noticia_carrousel_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'NoticiaCarrousel/RestoreVersion',
        method: 'PUT'
      }
    }
  ]
};

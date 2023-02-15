import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECCIONES_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'secciones_history_grid_def_column_id',
      id: true
    },
    {
      columnDef: 'sectionId',
      columnNameKey: 'secciones_history_grid_def_column_sectionid'
    },
    {
      columnDef: 'listIndex',
      columnNameKey: 'secciones_history_grid_def_column_listindex'
    },
    {
      columnDef: 'name',
      columnNameKey: 'secciones_history_grid_def_column_name'
    },
    {
      columnDef: 'seName',
      columnNameKey: 'secciones_history_grid_def_column_sename'
    },
    {
      columnDef: 'title',
      columnNameKey: 'secciones_history_grid_def_column_title'
    },
    {
      columnDef: 'link',
      columnNameKey: 'secciones_history_grid_def_column_link'
    },
    {
      columnDef: 'linkTarget',
      columnNameKey: 'secciones_history_grid_def_column_linktarget'
    },
    {
      columnDef: 'image',
      columnNameKey: 'secciones_history_grid_def_column_image'
    },
    {
      columnDef: 'published',
      columnNameKey: 'secciones_history_grid_def_column_published'
    },
    {
      columnDef: 'allowAnonymous',
      columnNameKey: 'secciones_history_grid_def_column_allowanonymous'
    },
    {
      columnDef: 'templateId',
      columnNameKey: 'secciones_history_grid_def_column_templateid'
    },
    {
      columnDef: 'orderItemsBy',
      columnNameKey: 'secciones_history_grid_def_column_orderitemsby'
    },
    {
      columnDef: 'filterDate',
      columnNameKey: 'secciones_history_grid_def_column_filterdate'
    },
    {
      columnDef: 'contactName',
      columnNameKey: 'secciones_history_grid_def_column_nombre_contacto'
    },
    {
      columnDef: 'contactEmail',
      columnNameKey: 'secciones_history_grid_def_column_contactemail'
    },
    {
      columnDef: 'contactTel',
      columnNameKey: 'secciones_history_grid_def_column_contacttel'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'secciones_history_grid_def_column_usuarioedit'
    },
    {
      columnDef: 'updatedOnUtcString',
      columnNameKey: 'secciones_history_grid_def_column_fechaedit'
    },
    {
      columnDef: 'policy',
      columnNameKey: 'secciones_history_grid_def_column_fechaedit'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'updatedOnUtcString'
  ],
  actions : [
    {
      actionNameKey: 'contenidos_history_grid_def_column_restoreversion',
      icon: 'repartition',
      confirm: true,
      ws: {
        key: 'contenidos_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'Section/RestoreVersion',
        method: 'PUT'
      }
    }
  ]
};

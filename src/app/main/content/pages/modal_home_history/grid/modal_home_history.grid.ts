import { PREFIX_DOMAIN_API } from "environments/environment";

export const MODAL_HOME_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'modal_home_history_grid_def_column_id',
      id: true
    },
    {
      columnDef: 'modalHomeId',
      columnNameKey: 'modal_home_history_grid_def_column_modalhomeid'
    },
    {
      columnDef: 'title',
      columnNameKey: 'modal_home_history_grid_def_column_title'
    },
    {
      columnDef: 'content',
      columnNameKey: 'modal_home_history_grid_def_column_content'
    },
    {
      columnDef: 'dateStart',
      columnNameKey: 'modal_home_history_grid_def_column_datestart'
    },
    {
      columnDef: 'dateEnd',
      columnNameKey: 'modal_home_history_grid_def_column_dateend'
    },
    {
      columnDef: 'creationUser',
      columnNameKey: 'modal_home_history_grid_def_column_creationuser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'modal_home_history_grid_def_column_updateuser'
    },
    {
      columnDef: 'creationDateString',
      columnNameKey: 'modal_home_history_grid_def_column_creationdatestring'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'modal_home_history_grid_def_column_updatedatestring'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'lastEditDateString'
  ],
  actions : [
    {
      actionNameKey: 'modal_home_history_grid_def_column_restoreversion',
      actionSecurity: 'MODAL_HOME_HISTORY_RESTORE_VERSION',
      icon: 'repartition',
      confirm: true,
      ws: {
        key: 'modal_home_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'ModalHome/RestoreVersion',
        method: 'PUT'
      }
    }
  ]
};

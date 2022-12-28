import { PREFIX_DOMAIN_API } from "environments/environment";

export const MESSAGE_TEMPLATE_HISTORY_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'message_template_history_grid_def_column_id'
    },
    {
      columnDef: 'messageTemplateId',
      columnNameKey: 'message_template_history_grid_def_column_messagetemplateid'
    },
    {
      columnDef: 'name',
      columnNameKey: 'message_template_history_grid_def_column_name'
    },
    {
      columnDef: 'bccEmailAddresses',
      columnNameKey: 'message_template_history_grid_def_column_bccemailaddresses'
    },
    {
      columnDef: 'isActive',
      columnNameKey: 'message_template_history_grid_def_column_isactive'
    },
    {
      columnDef: 'body',
      columnNameKey: 'message_template_history_grid_def_column_body'
    },
    {
      columnDef: 'EmailAccountId',
      columnNameKey: 'message_template_history_grid_def_column_emailaccountid'
    },
    {
      columnDef: 'body',
      columnNameKey: 'message_template_history_grid_def_column_lastEditUser'
    },
    {
      columnDef: 'EmailAccountId',
      columnNameKey: 'message_template_history_grid_def_column_lastEditDate'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'lastEditDate'
  ],
  actions : [
    {
      actionNameKey: 'message_template_history_grid_def_column_restoreversion',
      icon: 'repartition',
      confirm: true,
      ws: {
        key: 'message_template_history_grid_def_column_restoreversion',
        url: PREFIX_DOMAIN_API + 'MessageTemplate/RestoreVersion',
        method: 'PUT'
      }
    }
  ]
};

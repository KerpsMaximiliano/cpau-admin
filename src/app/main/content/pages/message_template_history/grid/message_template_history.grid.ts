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
      columnDef: 'subject',
      columnNameKey: 'message_template_history_grid_def_column_subject'
    },
    
    {
      columnDef: 'body',
      columnNameKey: 'message_template_history_grid_def_column_body'
    },
    {
      columnDef: 'isActive',
      columnNameKey: 'message_template_history_grid_def_column_isactive'
    },
    {
      columnDef: 'EmailAccountId',
      columnNameKey: 'message_template_history_grid_def_column_emailaccountid'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'message_template_history_grid_def_column_lastEditDate'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'message_template_history_grid_def_column_lastEditUser'
    },
    
  ],
  sortAllColumns: true,
  displayedColumns: [
    'lastEditUser',
    'lastEditDateString'
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

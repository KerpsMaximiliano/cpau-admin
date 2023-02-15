import { MESSAGE_TEMPLATE_HISTORY_NAV_DEF } from "../../message_template_history/navigation/message_template_history.nav";

export const MESSAGE_TEMPLATE_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'message_template_grid_def_column_id'
    },
    {
      columnDef: 'name',
      columnNameKey: 'message_template_grid_def_column_name'
    },
    {
      columnDef: 'bccEmailAddresses',
      columnNameKey: 'message_template_grid_def_column_bccemailaddresses'
    },
    {
      columnDef: 'subject',
      columnNameKey: 'message_template_grid_def_column_subject'
    },
    {
      columnDef: 'body',
      columnNameKey: 'message_template_grid_def_column_body'
    },
    {
      columnDef: 'isActive',
      columnNameKey: 'message_template_grid_def_column_isactive'
    },
    {
      columnDef: 'emailAccountId',
      columnNameKey: 'message_template_grid_def_column_emailaccountid'
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'message_template_grid_def_column_createuser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'message_template_grid_def_column_LastEditUser'
    },
    {
      columnDef: 'createDateString',
      columnNameKey: 'message_template_grid_def_column_CreateDateString'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'message_template_grid_def_column_LastEditDate'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'name',
    'subject',
    'bccEmailAddresses',
    'createUser',
    'createDateString',
    'lastEditUser',
    'lastEditDateString'
  ],
  actions : [
    {
      actionNameKey: 'Versiones Anteriores',
      actionType: 'redirect',
      redirect: {
        url: MESSAGE_TEMPLATE_HISTORY_NAV_DEF.url,
        querystring: {
          messageTemplateId : 'id',
          parentTitle: 'name'
        }
      },
      icon: 'manage_history'
    }
   ]
  
  
};

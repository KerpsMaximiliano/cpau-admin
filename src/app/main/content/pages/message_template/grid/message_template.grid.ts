import { HTML_EDITOR, TEXTAREA } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";
import { MESSAGE_TEMPLATE_HISTORY_NAV_DEF } from "../../message_template_history/navigation/message_template_history.nav";

export const MESSAGE_TEMPLATE_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
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
  groupActions: true,
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
      actionNameKey: 'Body',
      icon: 'description',
      actionSecurity: 'MESSAGE_TEMPLATE_UPDATE_BODY',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'body',
            labelKey: 'message_template_grid_def_column_body',
            label: 'Body',
            controlType: HTML_EDITOR
          }
        ]
      },
      ws: {
        key: 'message_template_grid_def_column_body',
        url: PREFIX_DOMAIN_API + 'MessageTemplate/UpdateBody',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'Body (Sin formato)',
      icon: 'note',
      actionSecurity: 'MESSAGE_TEMPLATE_UPDATE_BODY',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'body',
            labelKey: 'message_template_grid_def_column_body',
            label: 'Body',
            controlType: TEXTAREA
          }
        ]
      },
      ws: {
        key: 'message_template_grid_def_column_body',
        url: PREFIX_DOMAIN_API + 'MessageTemplate/UpdateBody',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'Versiones Anteriores',
      actionType: 'redirect',
      actionSecurity: 'MESSAGE_TEMPLATE_HISTORY_READ',
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

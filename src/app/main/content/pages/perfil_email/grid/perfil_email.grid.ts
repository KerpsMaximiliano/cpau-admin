import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_EMAIL_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'perfil_email_grid_def_column_idcontactdata'
    },
    {
      columnDef: 'email',
      columnNameKey: 'perfil_email_grid_def_column_email'
    },
    {
      columnDef: 'tipoEmail',
      columnNameKey: 'perfil_email_grid_def_column_tipoemail'
    }
  ],
  actions : [
    {
      actionNameKey: 'Eliminar',
      icon: 'delete',
      confirm: true,
      ws: {
        key: 'section_topic_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'admin/personas/contactos/email',
        method: 'DELETE'
      }
    },
  ],
  sortAllColumns: true,
  displayedColumns: [
    'id',
    'email',
    'tipoEmail'
  ]
};

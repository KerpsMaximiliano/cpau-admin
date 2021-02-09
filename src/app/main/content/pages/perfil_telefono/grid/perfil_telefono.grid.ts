import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_TELEFONO_GRID_DEF = {
    columnsDef: [
      {
        columnDef: 'id',
        columnNameKey: 'perfil_telefono_grid_def_column_id'
      },
      {
        columnDef: 'telefono',
        columnNameKey: 'perfil_telefono_grid_def_column_telefono'
      },
      {
        columnDef: 'tipoTelefono',
        columnNameKey: 'perfil_telefono_grid_def_column_tipoTelefono'
      },
    ],
    sortAllColumns: true,
    displayedColumns: [
      'id',
      'telefono',
      'tipoTelefono',
    ],
    actions: [
      {
        actionNameKey: 'perfil_telefono_grid_def_button_action_delete',
        icon: 'delete',
        confirm: true,
        ws: {
          key: 'perfil_telefono_grid_def_button_action_delete',
          url: PREFIX_DOMAIN_API + '/admin/personas/contactos/telefono',
          method: 'DELETE'
        }
      },
    ]
};

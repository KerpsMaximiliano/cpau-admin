import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_ROL_GRID_DEF = {
    columnsDef: [
      {
        columnDef: 'idRole',
        columnNameKey: 'perfilrol_grid_def_column_id'
      },
      {
        columnDef: 'name',
        columnNameKey: 'perfilrol_grid_def_column_nombre'
      }
    ],
    // actions : [
    //     {
    //       actionNameKey: 'Eliminar',
    //       icon: 'delete',
    //       confirm: true,
    //       ws: {
    //         key: 'perfil_rol_grid_def_button_action_bajar',
    //         url: PREFIX_DOMAIN_API + 'admin/personas/roles',
    //         method: 'DELETE'
    //       }
    //     },
    //   ],
    sortAllColumns: true,
    displayedColumns: [
      'idRole',
      'name',
    ],
    deleteAction: true,
    deleteTernaria: true,
    columnsTernaria: [
      'idUser',
      'idRole'
    ]
  };
  
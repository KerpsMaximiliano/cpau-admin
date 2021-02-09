import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_REDES_SOCIALES_GRID_DEF = {
    columnsDef: [
      {
        columnDef: 'id',
        columnNameKey: 'perfil_redes_sociales_grid_def_column_idcontact'
      },
      {
        columnDef: 'tipoRedSocial',
        columnNameKey: 'perfil_redes_sociales_grid_def_column_tipo'
      },
      {
        columnDef: 'url',
        columnNameKey: 'perfil_redes_sociales_grid_def_column_url'
      }
    ],
    actions : [
        {
          actionNameKey: 'Eliminar',
          icon: 'delete',
          confirm: true,
          ws: {
            key: 'perfil_redes_sociales_grid_def_button_action_bajar',
            url: PREFIX_DOMAIN_API + 'admin/personas/redsocial',
            method: 'DELETE'
          }
        },
      ],
    sortAllColumns: true,
    displayedColumns: [
      'id',
      'url',
      'tipoRedSocial'
    ]
  };
  
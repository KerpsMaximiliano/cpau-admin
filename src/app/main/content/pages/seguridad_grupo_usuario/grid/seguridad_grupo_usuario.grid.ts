import { SEGURIDAD_GRUPO_PERMISO_NAV_DEF } from "../../seguridad_grupo_permiso/navigation/seguridad_grupo_permiso.nav";

export const SEGURIDAD_GRUPO_USUARIO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'seguridad_grupo_usuario_grid_def_column_id'
    },
    {
      columnDef: 'idGrupo',
      columnNameKey: 'seguridad_grupo_usuario_grid_def_column_idgrupo'
    },
    {
      columnDef: 'idUsuario',
      columnNameKey: 'seguridad_grupo_usuario_grid_def_column_idusuario'
    },
    {
      columnDef: 'grupoNombre',
      columnNameKey: 'seguridad_grupo_usuario_grid_def_column_idgrupo'
    },
  ],
  sortAllColumns: true,
  displayedColumns: [
    'grupoNombre'
  ],
  deleteAction: true,
  actions: [
    {
      actionNameKey: 'Permisos del Grupo',
      actionType: 'redirect',
      redirect: {
        url: SEGURIDAD_GRUPO_PERMISO_NAV_DEF.url,
        querystring: {
          idGrupo : 'idGrupo',
          parentTitle: 'grupoNombre'
        }
      },
      icon: 'lock'
    }
  ]
};

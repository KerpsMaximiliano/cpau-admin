export const SEGURIDAD_GRUPO_PERMISO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'seguridad_grupo_permiso_grid_def_column_id'
    },
    {
      columnDef: 'idGrupo',
      columnNameKey: 'seguridad_grupo_permiso_grid_def_column_idgrupo'
    },
    {
      columnDef: 'idPermiso',
      columnNameKey: 'seguridad_grupo_permiso_grid_def_column_idpermiso'
    },
    {
      columnDef: 'permisoNombre',
      columnNameKey: 'seguridad_grupo_permiso_grid_def_column_idpermiso'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'permisoNombre'
  ],
  deleteAction: true
};

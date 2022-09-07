export const PERFIL_PUBLICACIONES_GRID_DEF = {
    columnsDef: [
      {
        columnDef: 'idSuscripcion',
        multiId: true,
        columnNameKey: 'perfil_publicaciones_grid_def_column_idSubcripcion'
      },
      {
        columnDef: 'idContact',
        singleId: true,
        columnNameKey: 'perfil_publicaciones_grid_def_column_idCOntact'
      },
      {
        columnDef: 'name',
        columnNameKey: 'perfil_publicaciones_grid_def_column_nombre'
      }
    ],
    sortAllColumns: true,
    displayedColumns: [
      'name',
    ],
    deleteAction: true,
    deleteTernaria: true,
    columnsTernaria: [
      'idContact',
      'idSuscripcion'
    ]
  };
  
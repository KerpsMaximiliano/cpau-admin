import { PREFIX_DOMAIN_API } from "environments/environment";

export const REVISTA_CONTENIDOS_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'revista_contenidos_grid_def_column_id'
    },
    {
      columnDef: 'revistaId',
      columnNameKey: 'revista_contenidos_grid_def_column_revistaid'
    },
    {
      columnDef: 'contenidoId',
      columnNameKey: 'revista_contenidos_grid_def_column_contenidoid'
    },
    {
      columnDef: 'contenidoString',
      columnNameKey: 'revista_contenidos_grid_def_column_contenidoid'
    },
    {
      columnDef: 'listIndex',
      columnNameKey: 'revista_contenidos_grid_def_column_listIndex'
    }

  ],
  sortAllColumns: true,
  displayedColumns: [
    'contenidoString',
    'listIndex'
  ],
  actions : [
    {
      actionNameKey: 'revista_contenidos_grid_def_column_eliminar',
      confirm: true,
      ws: {
        key: 'revista_contenidos_grid_def_column_eliminar',
        url: PREFIX_DOMAIN_API + 'RevistaContenidos',
        method: 'DELETE', 
        querystring: {
          id: 'id'
        }       
      },
      icon: 'delete'
    }
  ]
};

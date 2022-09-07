import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDO_AUTORES_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'contenido_autores_grid_def_column_id'
    },
    {
      columnDef: 'contenidoId',
      columnNameKey: 'contenido_autores_grid_def_column_contenidoid'
    },
    {
      columnDef: 'autorId',
      columnNameKey: 'contenido_autores_grid_def_column_autorid'
    },
    {
      columnDef: 'autorString',
      columnNameKey: 'contenido_autores_grid_def_column_autor'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'autorString'
  ],
  actions : [
    {
      actionNameKey: 'contenido_autores_grid_def_column_eliminar',
      confirm: true,
      ws: {
        key: 'contenido_tags_grid_def_column_eliminar',
        url: PREFIX_DOMAIN_API + 'ContenidoAutores',
        method: 'DELETE', 
        querystring: {
          id: 'id'
        }       
      },
      icon: 'delete'

    }
  ]
};

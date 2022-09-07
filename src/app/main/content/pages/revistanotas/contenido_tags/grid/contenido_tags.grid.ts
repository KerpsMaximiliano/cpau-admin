import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENIDO_TAGS_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'contenido_tags_grid_def_column_id'
    },
    {
      columnDef: 'contenidoId',
      columnNameKey: 'contenido_tags_grid_def_column_contenidoid'
    },
    {
      columnDef: 'tagId',
      columnNameKey: 'contenido_tags_grid_def_column_tagid'
    },
    {
      columnDef: 'tagString',
      columnNameKey: 'contenido_tags_grid_def_column_tag'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'tagString'
  ],
  actions : [
    {
      actionNameKey: 'contenido_tags_grid_def_column_eliminar',
      confirm: true,
      ws: {
        key: 'contenido_tags_grid_def_column_eliminar',
        url: PREFIX_DOMAIN_API + 'ContenidoTags',
        method: 'DELETE', 
        querystring: {
          id: 'id'
        }       
      },
      icon: 'delete'

    }
  ]
};

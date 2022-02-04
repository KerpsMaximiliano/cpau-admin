import { PREFIX_DOMAIN_API } from "environments/environment";

export const NOTICIA_CARROUSEL_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'noticia_carrousel_grid_def_column_id'
    },
    {
      columnDef: 'title',
      columnNameKey: 'noticia_carrousel_grid_def_column_title'
    },
    {
      columnDef: 'header',
      columnNameKey: 'noticia_carrousel_grid_def_column_header'
    },
    {
      columnDef: 'description',
      columnNameKey: 'noticia_carrousel_grid_def_column_description'
    },
    {
      columnDef: 'url',
      columnNameKey: 'noticia_carrousel_grid_def_column_url'
    },
    {
      columnDef: 'color',
      columnNameKey: 'noticia_carrousel_grid_def_column_color'
    },
    {
      columnDef: 'imageURL',
      columnNameKey: 'noticia_carrousel_grid_def_column_imageurl'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'noticia_carrousel_grid_def_column_orden'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'title',
    'orden'
 ]
  
};

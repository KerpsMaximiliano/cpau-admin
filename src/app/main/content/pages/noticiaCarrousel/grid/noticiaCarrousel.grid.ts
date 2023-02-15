import { PREFIX_DOMAIN_API } from "environments/environment";
import { NOTICIA_CARROUSEL_HISTORY_NAV_DEF } from "../../noticia_carrousel_history/navigation/noticia_carrousel_history.nav";

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
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'noticia_carrousel_grid_def_column_createuser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'noticia_carrousel_grid_def_column_LastEditUser'
    },
    {
      columnDef: 'createDateString',
      columnNameKey: 'noticia_carrousel_grid_def_column_CreateDateString'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'noticia_carrousel_grid_def_column_LastEditDate'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'title',
    'orden',
    'createUser',
    'createDateString',
    'lastEditUser',
    'lastEditDateString'
 ],
 actions : [
  {
    actionNameKey: 'Versiones Anteriores',
    actionType: 'redirect',
    redirect: {
      url: NOTICIA_CARROUSEL_HISTORY_NAV_DEF.url,
      querystring: {
        noticiaCarrouselId : 'id',
        parentTitle: 'name'
      }
    },
    icon: 'manage_history'
  }
 ]
  
};

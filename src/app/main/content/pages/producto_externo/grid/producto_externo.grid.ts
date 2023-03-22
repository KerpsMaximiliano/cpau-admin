import { PREFIX_DOMAIN_API } from "environments/environment";
import { PRODUCTO_EXTERNO_HISTORY_NAV_DEF } from "../../producto_externo_history/navigation/producto_externo_history.nav";

export const PRODUCTO_EXTERNO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'producto_externo_grid_def_column_id'
    },
    {
      columnDef: 'title',
      columnNameKey: 'producto_externo_grid_def_column_title'
    },
    {
      columnDef: 'header',
      columnNameKey: 'producto_externo_grid_def_column_header'
    },
    {
      columnDef: 'description',
      columnNameKey: 'producto_externo_grid_def_column_description'
    },
    {
      columnDef: 'url',
      columnNameKey: 'producto_externo_grid_def_column_url'
    },
    {
      columnDef: 'color',
      columnNameKey: 'producto_externo_grid_def_column_color'
    },
    {
      columnDef: 'imageURL',
      columnNameKey: 'producto_externo_grid_def_column_imageurl'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'producto_externo_grid_def_column_orden'
    },
    {
      columnDef: 'active',
      columnNameKey: 'producto_externo_grid_def_column_active'
    },
    {
      columnDef: 'notActive',
      columnNameKey: 'producto_externo_grid_def_column_notactive'
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'producto_externo_grid_def_column_CreateUser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'producto_externo_grid_def_column_LastEditUser'
    },
    {
      columnDef: 'createDateString',
      columnNameKey: 'producto_externo_grid_def_column_CreateDateString'
    },
    {
      columnDef: 'lastEditDateString',
      columnNameKey: 'producto_externo_grid_def_column_LastEditDate'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'title',
    'orden',
    'active',
    'createUser',
    'createDateString',
    'lastEditUser',
    'lastEditDateString'
 ],
 actions: [
  {
    actionNameKey: 'producto_externo_grid_def_button_action_publicar',
    icon: 'cloud_upload',
    confirm: true,
    actionSecurity: 'PRODUCTO_EXTERNO_PUBLICAR_DESPUBLICAR',
    ws: {
      key: 'producto_externo_grid_def_button_action_publicar',
      url: PREFIX_DOMAIN_API + 'ExternalProduct/ActivarDesactivar/',
      method: 'PUT'
    }
  },
  {
    actionNameKey: 'producto_externo_grid_def_button_action_despublicar',
    icon: 'cloud_download',
    actionSecurity: 'PRODUCTO_EXTERNO_PUBLICAR_DESPUBLICAR',
    confirm: true,
    ws: {
      key: 'producto_externo_grid_def_button_action_despublicar',
      url: PREFIX_DOMAIN_API + 'ExternalProduct/ActivarDesactivar/',
      method: 'PUT'
    }
  },
  {
    actionNameKey: 'Versiones Anteriores',
    actionType: 'redirect',
    actionSecurity: 'PRODUCTO_EXTERNO_HISTORY_READ',
    redirect: {
      url: PRODUCTO_EXTERNO_HISTORY_NAV_DEF.url,
      querystring: {
        externalProductId : 'id',
        parentTitle: 'name'
      }
    },
    icon: 'manage_history'
  }
 ],
 displayedActionsCondition: [
  {
    key: 'producto_externo_grid_def_button_action_publicar',
    expression: {
                  key: 'notActive',
                  value: true
                }
  },
  {
    key: 'producto_externo_grid_def_button_action_despublicar',
    expression: {
                  key: 'active',
                  value: true
                }
  }
]
  
};

import { PREFIX_DOMAIN_API } from "environments/environment";

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
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'title',
    'orden',
    'active'
 ],
 actions: [
  {
    actionNameKey: 'producto_externo_grid_def_button_action_publicar',
    icon: 'cloud_upload',
    confirm: true,
    ws: {
      key: 'producto_externo_grid_def_button_action_publicar',
      url: PREFIX_DOMAIN_API + 'ExternalProduct/ActivarDesactivar/',
      method: 'PUT'
    }
  },
  {
    actionNameKey: 'producto_externo_grid_def_button_action_despublicar',
    icon: 'cloud_download',
    confirm: true,
    ws: {
      key: 'producto_externo_grid_def_button_action_despublicar',
      url: PREFIX_DOMAIN_API + 'ExternalProduct/ActivarDesactivar/',
      method: 'PUT'
    }
  },
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

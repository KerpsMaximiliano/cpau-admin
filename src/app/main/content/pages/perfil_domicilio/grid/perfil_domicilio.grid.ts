import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_DOMICILIO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'perfil_domicilio_grid_def_column_idcontactdata'
    },
    {
      columnDef: 'calle',
      columnNameKey: 'perfil_domicilio_grid_def_column_calle'
    },
    {
      columnDef: 'altura',
      columnNameKey: 'perfil_domicilio_grid_def_column_altura'
    },
    {
      columnDef: 'piso',
      columnNameKey: 'perfil_domicilio_grid_def_column_piso'
    },
    {
      columnDef: 'dpto',
      columnNameKey: 'perfil_domicilio_grid_def_column_dpto'
    },
    {
      columnDef: 'localidad',
      columnNameKey: 'perfil_domicilio_grid_def_column_localidad'
    },
    {
      columnDef: 'codioPostal',
      columnNameKey: 'perfil_domicilio_grid_def_column_codiopostal'
    },
    {
      columnDef: 'tipoDomicilio',
      columnNameKey: 'perfil_domicilio_grid_def_column_tipodomicilio'
    },
    {
      columnDef: 'idTipoDomicilio',
      columnNameKey: 'perfil_domicilio_grid_def_column_tipodomicilio'
    }
  ],
  actions : [
    {
      actionNameKey: 'Eliminar',
      icon: 'delete',
      confirm: true,
      ws: {
        key: 'section_topic_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'admin/personas/domicilio',
        method: 'DELETE'
      }
    },
  ],
  sortAllColumns: true,
  displayedColumns: [
    'id',
    'calle',
    'altura',
    'piso',
    'dpto',
    'localidad',
    'codioPostal',
    'tipoDomicilio',
  ]
};

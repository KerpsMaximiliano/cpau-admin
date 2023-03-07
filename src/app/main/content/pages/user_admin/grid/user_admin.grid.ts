export const USER_ADMIN_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'user_admin_grid_def_column_id'
    },
    {
      columnDef: 'username',
      columnNameKey: 'user_admin_grid_def_column_username'
    },
    {
      columnDef: 'nombreApellido',
      columnNameKey: 'user_admin_grid_def_column_nombre'
    },
    {
      columnDef: 'email',
      columnNameKey: 'user_admin_grid_def_column_email'
    },
    {
      columnDef: 'lastIpAddress',
      columnNameKey: 'user_admin_grid_def_column_lastipaddress'
    },
    {
      columnDef: 'createdOnUtcString',
      columnNameKey: 'user_admin_grid_def_column_createdonutcstring'
    },
    {
      columnDef: 'lastLoginDateUtcString',
      columnNameKey: 'user_admin_grid_def_column_lastlogindateutcstring'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'username',
    'nombreApellido',
    'email',
    'lastIpAddress',
    'createdOnUtcString',
    'lastLoginDateUtcString'
  ]
};

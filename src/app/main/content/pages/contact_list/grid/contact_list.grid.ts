export const CONTACT_LIST_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'contact_list_grid_def_column_id'
    },
    {
      columnDef: 'name',
      columnNameKey: 'contact_list_grid_def_column_name'
    },
    {
      columnDef: 'descripition',
      columnNameKey: 'contact_list_grid_def_column_descripition'
    },
    {
      columnDef: 'allowsJoin',
      columnNameKey: 'contact_list_grid_def_column_allowsjoin'
    },
    {
      columnDef: 'codeList',
      columnNameKey: 'contact_list_grid_def_column_codelist'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'codeList',
    'name',
    'descripition',
    'allowsJoin'
  ]
};

export const MESSAGE_TEMPLATE_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'message_template_grid_def_column_id'
    },
    {
      columnDef: 'name',
      columnNameKey: 'message_template_grid_def_column_name'
    },
    {
      columnDef: 'bccEmailAddresses',
      columnNameKey: 'message_template_grid_def_column_bccemailaddresses'
    },
    {
      columnDef: 'subject',
      columnNameKey: 'message_template_grid_def_column_subject'
    },
    {
      columnDef: 'body',
      columnNameKey: 'message_template_grid_def_column_body'
    },
    {
      columnDef: 'isActive',
      columnNameKey: 'message_template_grid_def_column_isactive'
    },
    {
      columnDef: 'emailAccountId',
      columnNameKey: 'message_template_grid_def_column_emailaccountid'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'name',
    'subject',
    'bccEmailAddresses'
  ]
};

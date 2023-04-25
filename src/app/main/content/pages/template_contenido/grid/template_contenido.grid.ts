export const TEMPLATE_CONTENIDO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'template_contenido_grid_def_column_id'
    },
    {
      columnDef: 'title',
      columnNameKey: 'template_contenido_grid_def_column_title'
    },
    {
      columnDef: 'description',
      columnNameKey: 'template_contenido_grid_def_column_description'
    },
    {
      columnDef: 'content',
      columnNameKey: 'template_contenido_grid_def_column_content'
    }
  ],
  sortAllColumns: true,
  groupActions: true,
  deleteAction: true,
  displayedColumns: [
    // 'id',
    'title',
    'description',
    // 'content'
  ],
  actions:[
    {
      actionNameKey: 'Versiones Anteriores',
      actionType: 'redirect',
      actionSecurity: 'CONTENIDO_HISTORY_READ',
      redirect: {
        url: '',
        querystring: {
          contentId : 'id',
          parentTitle: 'title'
        }
      },
      icon: 'manage_history'
    },
  ]
};

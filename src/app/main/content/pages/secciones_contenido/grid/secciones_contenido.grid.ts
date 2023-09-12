export const SECCIONES_CONTENIDO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'seccion_grid_def_column_id'
    },
    {
      columnDef: 'sectionContentId',
      columnNameKey: 'seccion_grid_def_column_sectioncontentid'
    },
    {
      columnDef: 'contenidoId',
      columnNameKey: 'SECCIONES_CONTENIDO_FILTER_FORM_FIELDS_DEF_FIELD_contenidoId'
    },
    {
      columnDef: 'name',
      columnNameKey: 'seccion_grid_def_column_name'
    },
    {
      columnDef: 'seName',
      columnNameKey: 'seccion_grid_def_column_sename'
    },
    {
      columnDef: 'link',
      columnNameKey: 'seccion_grid_def_column_url'
    },
    {
      columnDef: 'linkTarget',
      columnNameKey: 'seccion_grid_def_column_linktarget'
    },
    {
      columnDef: 'imageId',
      columnNameKey: 'seccion_grid_def_column_imageid'
    },
    {
      columnDef: 'published',
      columnNameKey: 'seccion_grid_def_column_published'
    },
    {
      columnDef: 'allowAnonymous',
      columnNameKey: 'seccion_grid_def_column_allowanonymous'
    },
    {
      columnDef: 'templateId',
      columnNameKey: 'seccion_grid_def_column_templateid'
    },
    {
      columnDef: 'title',
      columnNameKey: 'seccion_grid_def_column_title'
    },
    {
      columnDef: 'contactName',
      columnNameKey: 'seccion_grid_def_column_contactName'
    },
    {
      columnDef: 'contactEmail',
      columnNameKey: 'seccion_grid_def_column_contactEmail'
    },
    {
      columnDef: 'contanctTel',
      columnNameKey: 'seccion_grid_def_column_contanctTel'
    },
    {
      columnDef: 'policy',
      columnNameKey: 'seccion_grid_def_column_policy'
    },
    {
      columnDef: 'deleteable',
      columnNameKey: 'seccion_grid_def_column_policy'
    },
    {
      columnDef: 'notdeleteable',
      columnNameKey: 'seccion_grid_def_column_policy'
    }
  ],
  sortAllColumns: true,
  deleteAction: false,
  displayedColumns: [
    'name',
    'seName',
    'published'
  ],
  actions: [
    {
      actionNameKey: 'Ir a los contenidos de la sección',
      actionType: 'redirect',
      redirect: {
        url: '/sectionContent',
        querystring: {
          sectionId : 'id',
          parentTitle: 'name'
        }
      },
      icon: 'library_books'
    },
    {
      actionNameKey: 'Ver boletines que lo contienen',
      actionType: 'redirect',
      redirect: {
        openTab: true,
        url: 'seccionboletincontenido',
        querystring: {
          sectionContentId : 'sectionContentId'
        }
      },
      icon: 'account_tree'
    },
  ]
};

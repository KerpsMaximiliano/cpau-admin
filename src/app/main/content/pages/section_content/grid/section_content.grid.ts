import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECTION_CONTENT_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'section_content_grid_def_column_id'
    },
    {
      columnDef: 'sectionId', // este parametro deberá pasarse al create para saber el contenido padre
      columnNameKey: 'section_content_grid_def_column_sectionid'
    },
    {
      columnDef: 'contentId',
      columnNameKey: 'section_content_grid_def_column_contentid'
    },
    {
      columnDef: 'content',
      columnNameKey: 'section_content_grid_def_column_contentid'
    },
    {
      columnDef: 'highlighted',
      columnNameKey: 'section_content_grid_def_column_highlighted'
    },
    {
      columnDef: 'isPublished',
      columnNameKey: 'section_content_grid_def_column_isPublished'
    }
    ,
    {
      columnDef: 'displayOrder',
      columnNameKey: 'displayOrder'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'content',
    'highlighted',
    'displayOrder'
  ],
  actions: [
    {
      actionNameKey: 'section_content_grid_def_button_action_bajar',
      icon: 'arrow_downward',
      ws: {
        key: 'section_content_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'SectionContent/bajar',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    },
    {
      actionNameKey: 'section_content_grid_def_button_action_subir',
      icon: 'arrow_upward',
      ws: {
        key: 'section_content_grid_def_button_action_subir',
        url: PREFIX_DOMAIN_API + 'SectionContent/subir',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    }
  ]
  
};

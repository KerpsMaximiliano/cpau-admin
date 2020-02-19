import { PREFIX_DOMAIN_API } from "environments/environment";

export const OPCION_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'idFormFieldOption',
      columnNameKey: 'opcion_grid_def_column_id'
    },
    {
      columnDef: 'idFormField',
      columnNameKey: 'opcion_grid_def_column_idfield'
    },
    {
      columnDef: 'idForm',
      columnNameKey: 'opcion_grid_def_column_idform'
    },
    {
      columnDef: 'text',
      columnNameKey: 'opcion_grid_def_column_text'
    },
    {
      columnDef: 'value',
      columnNameKey: 'opcion_grid_def_column_value'
    },
    {
      columnDef: 'allowComments',
      columnNameKey: 'opcion_grid_def_column_allowComments'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'text',
    'value',
    'allowComments'
  ],
  actions: [
    {
      actionNameKey: 'section_topic_grid_def_button_action_bajar',
      icon: 'arrow_downward',
      ws: {
        key: 'section_topic_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'FormFieldOption/bajar',
        method: 'GET',
        querystring: {
          idForm : 'idForm',
          idFormField: 'idFormField',
          idFormFieldOption: 'idFormFieldOption'
        }
      }
    },
    {
      actionNameKey: 'section_topic_grid_def_button_action_subir',
      icon: 'arrow_upward',
      ws: {
        key: 'section_topic_grid_def_button_action_subir',
        url: PREFIX_DOMAIN_API + 'FormFieldOption/subir',
        method: 'GET',
        querystring: {
          idForm : 'idForm',
          idFormField: 'idFormField',
          idFormFieldOption: 'idFormFieldOption'
        }
      }
    }
  ],
  deleteAction: true
};

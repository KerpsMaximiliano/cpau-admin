import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const AUTORES_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      key: true,
      columnNameKey: 'autores_grid_def_column_id'
    },
    {
      columnDef: 'nombre',
      columnNameKey: 'autores_grid_def_column_nombre'
    },
    {
      columnDef: 'shortBio',
      columnNameKey: 'autores_grid_def_column_shortbio'
    },
    {
      columnDef: 'imagenPerfil',
      columnNameKey: 'autores_grid_def_column_imagenperfil'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'nombre'
  ],
  deleteAction: true,
  actions: [
    {
      actionNameKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_shortbio',
      icon: 'notes',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'shortBio',
            labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_shortbio',
            label: 'Short Bio',
            controlType: HTML_EDITOR
          }
        ]
      },
      ws: {
        key: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_shortbio',
        url: PREFIX_DOMAIN_API + 'Autores/UpdateShortBio',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_bio',
      icon: 'reorder',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'bio',
            labelKey: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_bio',
            label: 'Bio',
            controlType: HTML_EDITOR
          }
        ]
      },
      ws: {
        key: 'AUTORES_UPDATE_FORM_FIELDS_DEF_FIELD_bio',
        url: PREFIX_DOMAIN_API + 'Autores/UpdateBio',
        method: 'PUT'
      }
    }
  ]
};

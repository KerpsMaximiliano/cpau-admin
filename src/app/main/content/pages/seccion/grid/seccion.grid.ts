import { PREFIX_DOMAIN_API } from "environments/environment";
import { identifierModuleUrl } from "@angular/compiler";
import { SECCION_CREATE_FORM_FIELDS_DEF } from "../form/seccion.create.fields";
import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const SECCION_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'seccion_grid_def_column_id'
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
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'name',
    'seName',
    'published'
  ],
  actions: [
    {
      actionNameKey: 'seccion_grid_def_button_action_nueva_seccion_hija',
      icon: 'post_add',
      form: [
        {
          label: 'id',
          key: 'id',
          controlType: 'hidden'
        },
        {
          key: 'newName',
          labelKey: 'seccion_create_form_fields_def_field_name',
          label: 'Nombre',
          type: 'string',
          controlType: 'textbox',
          maxLength: 200,
          required: true
        } 
      ],
      ws: {
        key: 'seccion_grid_def_button_action_nueva_seccion_hija',
        url: PREFIX_DOMAIN_API + 'Section',
        method: 'POST'
      }
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_contenido',
      actionType: 'redirect',
      redirect: {
        url: '/sectionContent',
        querystring: {
          sectionId : 'id'
        }
      },
      icon: 'library_books'
    },
    /*{
      actionNameKey: 'seccion_grid_def_button_action_relaciones',
      icon: 'shuffle',
      actionType: 'redirect',
      redirect: {
        url: '/sectionTopic',
        querystring: {
          sectionId : 'id',
        }
      }
    },*/
    {
      actionNameKey: 'seccion_grid_def_button_action_mover_seccion',
      icon: 'low_priority',
      form: [
        {
          label: 'id',
          key: 'id',
          controlType: 'hidden'
        },
        {
          labelKey: 'seccion_create_form_fields_def_field_seccion',
          key: 'name',
          controlType: 'textbox',
          disabled: true
        },
        {
          key: 'newParentId',
          labelKey: 'seccion_create_form_fields_def_field_seccion_mover',
          label: 'Mover a la Sección',
          controlType: 'select',
          options: {
            elementLabel: 'nombre',
            elementValue: 'id',
            fromWs: {
              url: PREFIX_DOMAIN_API + 'Section/SeccionRuta'
            }          
          }
        }
      ],
      ws: {
        key: 'seccion_grid_def_button_action_nueva_mover_seccion',
        url: PREFIX_DOMAIN_API + 'Section/MoverSeccion',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_politicas',
      icon: 'account_balance',
      form: [
        {
          key: 'policy',
          labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_Policy',
          controlType: HTML_EDITOR
        }
      ],
      ws: {
        key: 'seccion_grid_def_button_action_politicas',
        url: PREFIX_DOMAIN_API + 'Section/UpdateByProps',
        method: 'PUT'
      }
    },
  ]
};



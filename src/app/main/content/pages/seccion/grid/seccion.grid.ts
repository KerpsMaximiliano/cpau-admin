import { PREFIX_DOMAIN_API } from "environments/environment";
import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";
import { SECCIONES_HISTORY_NAV_DEF } from "../../secciones_history/navigation/secciones_history.nav";

export const SECCION_GRID_DEF : GridDef = {
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
    },
    {
      columnDef: 'deleteable',
      columnNameKey: 'seccion_grid_def_column_policy'
    },
    {
      columnDef: 'notdeleteable',
      columnNameKey: 'seccion_grid_def_column_policy'
    },
    {
      columnDef: 'createdOnUtcString',
      columnNameKey: 'seccion_grid_def_column_createDate'
    },
    {
      columnDef: 'updatedOnUtcString',
      columnNameKey: 'seccion_grid_def_column_updateDate'
    },
    {
      columnDef: 'createUser',
      columnNameKey: 'seccion_grid_def_column_createUser'
    },
    {
      columnDef: 'lastEditUser',
      columnNameKey: 'seccion_grid_def_column_updateUser'
    }

  ],
  sortAllColumns: true,
  deleteAction: false,
  displayedColumns: [
    'name',
    'seName',
    'published',
    'createUser',
    'createdOnUtcString',
    'lastEditUser',
    'updatedOnUtcString',
  ],
  actions: [
    {
      actionNameKey: 'section_content_grid_def_button_action_delete',
      icon: 'delete',
      actionSecurity: 'SECCION_DELETE', 
      confirm: true,
      ws: {
        key: 'section_content_grid_def_button_action_delete',
        url: PREFIX_DOMAIN_API + 'Section',
        method: 'DELETE'
      }
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_nueva_seccion_hija',
      icon: 'post_add',
      actionSecurity: 'SECCION_CREATE', 
      formDef: {
        showSubmitContinue: true,
        fields : [
          {
            label: 'id',
            key: 'id',
            controlType: 'hidden'
          },
          {
            key: 'name',
            label: 'Crear nueva sección en ',
            controlType: 'textbox',
            maxLength: 200,
            required: true,
            disabled: true,
          },
          {
            key: 'newName',
            labelKey: 'seccion_create_form_fields_def_field_name',
            label: 'Nombre',
            controlType: 'textbox',
            maxLength: 200,
            required: true
          },
          {
            key: 'published',
            labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_published',
            label: 'Publicada',
            controlType: 'checkbox',
            value: 'false'
          }
        ]
      },
      
      ws: {
        key: 'seccion_grid_def_button_action_nueva_seccion_hija',
        url: PREFIX_DOMAIN_API + 'Section',
        method: 'POST'
      }
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_contenido',
      actionType: 'redirect',
      actionSecurity: 'SECCIONES_CONTENIDO_READ', 
      redirect: {
        url: '/sectionContent',
        querystring: {
          sectionId : 'id',
          parentTitle: 'name'
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
      actionSecurity: 'SECCIONES_MOVER_SECCION', 
      form: [
        {
          label: 'id',
          key: 'idContact',
          controlType: 'hidden'
        },
        {
          labelKey: 'seccion_create_form_fields_def_field_seccion',
          key: 'name',
          controlType: 'textbox',
          disabled: true
        },
        {
          key: 'newParent',
          labelKey: 'seccion_create_form_fields_def_field_seccion_mover',
          label: 'Mover a la Sección',
          controlType: 'autocomplete-desplegable',
          options: {
            transferIdToField: 'newParentId',
            elementLabel: 'nombre',
            elementValue: 'id',
            useNativeFilter: false,
            selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
          },
          apiOptions: {
            queryString: {
              filter: 'newParent'
            },
            defaultShow: 20,
            url: PREFIX_DOMAIN_API + 'Section/SeccionRuta'
          }
        },
        {
          key: 'newParentId',
          controlType: 'hidden'
        },
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
      actionSecurity: 'SECCIONES_UPDATE_POLITICAS', 
      formDef: {
        fields : [
          {
            key: 'policy',
            labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_Policy',
            controlType: HTML_EDITOR
          }
        ],
        showSubmitContinue: true
      },
      ws: {
        key: 'seccion_grid_def_button_action_politicas',
        url: PREFIX_DOMAIN_API + 'Section/UpdatePolicy',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'Versiones Anteriores',
      actionType: 'redirect',
      actionSecurity: 'SECCIONES_HISTORY_READ', 
      redirect: {
        url: SECCIONES_HISTORY_NAV_DEF.url,
        querystring: {
          sectionsId : 'id',
          parentTitle: 'name'
        }
      },
      icon: 'manage_history'
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_reordenar',
      icon: 'swipe_vertical',
      //actionSecurity: 'SECCIONES_REORDER',
      confirm: true,
      ws: {
        key: 'seccion_grid_def_button_action_reordenar',
        url: PREFIX_DOMAIN_API + 'SectionContent/ResetPositions',
        method: 'PUT'
      }
    }
    
  ],
  displayedActionsCondition: [
    {
      key: 'section_content_grid_def_button_action_delete',
      expression: {
                    key: 'deleteable',
                    value: true
                  }
    }
 ]
};



import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";

export const MODAL_GRID_DEF = {
    columnsDef: [
        {
            columnDef: 'id',
            id: true,
            columnNameKey: 'modal_grid_def_column_id'
        },
        {
            columnDef: 'title',
            columnNameKey: 'modal_grid_def_column_title'
        },
        {
            columnDef: 'content',
            columnNameKey: 'modal_grid_def_column_content'
        },
        {
            columnDef: 'dateStartGrid',
            columnNameKey: 'modal_grid_def_column_startdate'
        },
        {
            columnDef: 'dateEndGrid',
            columnNameKey: 'modal_grid_def_column_enddate'
        }
    ],
    sortAllColumns: true,
    deleteAction: true,
    displayedColumns: [
        //'id',
        'title',
        //'content',
        'dateStartGrid',
        'dateEndGrid'
    ],
    // actions: [
    //   {
    //     actionNameKey: 'section_content_grid_def_button_action_delete',
    //     icon: 'delete',
    //     confirm: true,
    //     ws: {
    //       key: 'section_content_grid_def_button_action_delete',
    //       url: PREFIX_DOMAIN_API + 'Section',
    //       method: 'DELETE'
    //     }
    //   },
    //       {
    //         actionNameKey: 'seccion_grid_def_button_action_nueva_seccion_hija',
    //         icon: 'post_add',
    //         formDef: {
    //           showSubmitContinue: true,
    //           fields : [
    //             {
    //               label: 'id',
    //               key: 'id',
    //               controlType: 'hidden'
    //             },
    //             {
    //               key: 'name',
    //               label: 'Crear nueva sección en ',
    //               controlType: 'textbox',
    //               maxLength: 200,
    //               required: true,
    //               disabled: true,
    //             },
    //             {
    //               key: 'newName',
    //               labelKey: 'seccion_create_form_fields_def_field_name',
    //               label: 'Nombre',
    //               controlType: 'textbox',
    //               maxLength: 200,
    //               required: true
    //             },
    //             {
    //               key: 'published',
    //               labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_published',
    //               label: 'Publicada',
    //               controlType: 'checkbox',
    //               value: 'false'
    //             }
    //           ]
    //         },

    //         ws: {
    //           key: 'seccion_grid_def_button_action_nueva_seccion_hija',
    //           url: PREFIX_DOMAIN_API + 'Section',
    //           method: 'POST'
    //         }
    //       },
    //       {
    //         actionNameKey: 'seccion_grid_def_button_action_contenido',
    //         actionType: 'redirect',
    //         redirect: {
    //           url: '/sectionContent',
    //           querystring: {
    //             sectionId : 'id',
    //             parentTitle: 'name'
    //           }
    //         },
    //         icon: 'library_books'
    //       },
    //       /*{
    //         actionNameKey: 'seccion_grid_def_button_action_relaciones',
    //         icon: 'shuffle',
    //         actionType: 'redirect',
    //         redirect: {
    //           url: '/sectionTopic',
    //           querystring: {
    //             sectionId : 'id',
    //           }
    //         }
    //       },*/
    //       {
    //         actionNameKey: 'seccion_grid_def_button_action_mover_seccion',
    //         icon: 'low_priority',
    //         form: [
    //           {
    //             label: 'id',
    //             key: 'id',
    //             controlType: 'hidden'
    //           },
    //           {
    //             labelKey: 'seccion_create_form_fields_def_field_seccion',
    //             key: 'name',
    //             controlType: 'textbox',
    //             disabled: true
    //           },
    //           {
    //             key: 'newParentId',
    //             labelKey: 'seccion_create_form_fields_def_field_seccion_mover',
    //             label: 'Mover a la Sección',
    //             controlType: 'select',
    //             options: {
    //               elementLabel: 'nombre',
    //               elementValue: 'id',
    //               fromWs: {
    //                 url: PREFIX_DOMAIN_API + 'Section/SeccionRuta'
    //               }          
    //             }
    //           }
    //         ],
    //         ws: {
    //           key: 'seccion_grid_def_button_action_nueva_mover_seccion',
    //           url: PREFIX_DOMAIN_API + 'Section/MoverSeccion',
    //           method: 'PUT'
    //         }
    //       },
    //       {
    //         actionNameKey: 'seccion_grid_def_button_action_politicas',
    //         icon: 'account_balance',
    //         formDef: {
    //           fields : [
    //             {
    //               key: 'policy',
    //               labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_Policy',
    //               controlType: HTML_EDITOR
    //             }
    //           ],
    //           showSubmitContinue: true
    //         },
    //         ws: {
    //           key: 'seccion_grid_def_button_action_politicas',
    //           url: PREFIX_DOMAIN_API + 'Section/UpdateByProps',
    //           method: 'PUT'
    //         }
    //       }

    // ],
    //     displayedActionsCondition: [
    //       {
    //         key: 'section_content_grid_def_button_action_delete',
    //         expression: {
    //                       key: 'deleteable',
    //                       value: true
    //                     }
    //       }
    // ]
} as GridDef;

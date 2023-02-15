import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";
import { MODAL_HOME_HISTORY_DEF } from "../../modal_home_history/modal_home_history.def";
import { MODAL_HOME_HISTORY_NAV_DEF } from "../../modal_home_history/navigation/modal_home_history.nav";

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
            columnDef: 'dateStart',
            columnNameKey: 'modal_grid_def_column_startdate'
        },
        {
            columnDef: 'dateEnd',
            columnNameKey: 'modal_grid_def_column_enddate'
        },
        {
            columnDef: 'createUser',
            columnNameKey: 'modal_grid_def_column_CreationUser'
        },
        {
            columnDef: 'lastEditUser',
            columnNameKey: 'modal_grid_def_column_UpdateUser'
        },
        {
            columnDef: 'createDateString',
            columnNameKey: 'modal_grid_def_column_CreationDateString'
        },
        {
            columnDef: 'lastEditDateString',
            columnNameKey: 'modal_grid_def_column_UpdateDateString'
        }
    ],
    sortAllColumns: true,
    deleteAction: true,
    displayedColumns: [
        'title',
        'dateStart',
        'dateEnd',
        'createUser',
        'createDateString',
        'lastEditUser',
        'lastEditDateString'
    ],
    actions : [
        {
        actionNameKey: 'Versiones Anteriores',
        actionType: 'redirect',
        redirect: {
            url: MODAL_HOME_HISTORY_NAV_DEF.url,
            querystring: {
            modalHomeId : 'id',
            parentTitle: 'name'
            }
        },
        icon: 'manage_history'
        }   
    ]
} as GridDef;

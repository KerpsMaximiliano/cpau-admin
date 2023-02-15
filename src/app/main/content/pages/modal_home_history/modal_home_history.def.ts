import { MODAL_HOME_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/modal_home_history.create.fields';
import { MODAL_HOME_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/modal_home_history.update.fields';
import { MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF } from './form/modal_home_history.read.fields';
import { MODAL_HOME_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/modal_home_history.filter.fields';
import { MODAL_HOME_HISTORY_SECURITY_DEF } from './security/modal_home_history.security';
import { MODAL_HOME_HISTORY_GRID_DEF } from './grid/modal_home_history.grid';
import { MODAL_HOME_HISTORY_I18N_DEF } from './i18n/modal_home_history.i18n';
import { MODAL_HOME_HISTORY_NAV_DEF } from './navigation/modal_home_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const MODAL_HOME_HISTORY_DEF: CrudDef = { 
    name: 'MODAL_HOME_HISTORY',
    i18n: MODAL_HOME_HISTORY_I18N_DEF,
    grid: MODAL_HOME_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: MODAL_HOME_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: MODAL_HOME_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: MODAL_HOME_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: MODAL_HOME_HISTORY_NAV_DEF,
    security: MODAL_HOME_HISTORY_SECURITY_DEF,
    ws: {
        key: 'MODAL_HOME_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'ModalHome/GetVersions'
    },
    dialogConfig: {
        width: '800px'
    },
    filterInMemory: false,
    backButton: true,
    serverPagination: true,
    pagination: {
        page: 0,
        pageSize: 10
    },
    cancelInitSearch: false 
};

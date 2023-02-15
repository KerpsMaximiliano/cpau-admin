import { SECCIONES_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/secciones_history.create.fields';
import { SECCIONES_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/secciones_history.update.fields';
import { SECCIONES_HISTORY_READ_FORM_FIELDS_DEF } from './form/secciones_history.read.fields';
import { SECCIONES_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/secciones_history.filter.fields';
import { SECCIONES_HISTORY_SECURITY_DEF } from './security/secciones_history.security';
import { SECCIONES_HISTORY_GRID_DEF } from './grid/secciones_history.grid';
import { SECCIONES_HISTORY_I18N_DEF } from './i18n/secciones_history.i18n';
import { SECCIONES_HISTORY_NAV_DEF } from './navigation/secciones_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const SECCIONES_HISTORY_DEF: CrudDef = { 
    name: 'SECCIONES_HISTORY',
    i18n: SECCIONES_HISTORY_I18N_DEF,
    grid: SECCIONES_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: SECCIONES_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: SECCIONES_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: SECCIONES_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  SECCIONES_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: SECCIONES_HISTORY_NAV_DEF,
    security: SECCIONES_HISTORY_SECURITY_DEF,
    ws: {
        key: 'SECCIONES_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Section/GetVersions'
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

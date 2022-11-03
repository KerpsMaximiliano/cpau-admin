import { CONTENIDOS_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/contenidos_history.create.fields';
import { CONTENIDOS_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/contenidos_history.update.fields';
import { CONTENIDOS_HISTORY_READ_FORM_FIELDS_DEF } from './form/contenidos_history.read.fields';
import { CONTENIDOS_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/contenidos_history.filter.fields';
import { CONTENIDOS_HISTORY_SECURITY_DEF } from './security/contenidos_history.security';
import { CONTENIDOS_HISTORY_GRID_DEF } from './grid/contenidos_history.grid';
import { CONTENIDOS_HISTORY_I18N_DEF } from './i18n/contenidos_history.i18n';
import { CONTENIDOS_HISTORY_NAV_DEF } from './navigation/contenidos_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const CONTENIDOS_HISTORY_DEF: CrudDef = { 
    name: 'CONTENIDOS_HISTORY',
    i18n: CONTENIDOS_HISTORY_I18N_DEF,
    grid: CONTENIDOS_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: CONTENIDOS_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: CONTENIDOS_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: CONTENIDOS_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  CONTENIDOS_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: CONTENIDOS_HISTORY_NAV_DEF,
    security: CONTENIDOS_HISTORY_SECURITY_DEF,
    ws: {
        key: 'CONTENIDOS_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Contenidos/GetVersions'
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

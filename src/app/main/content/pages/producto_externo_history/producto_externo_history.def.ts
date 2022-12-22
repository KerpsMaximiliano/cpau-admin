import { PRODUCTO_EXTERNO_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/producto_externo_history.create.fields';
import { PRODUCTO_EXTERNO_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/producto_externo_history.update.fields';
import { PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF } from './form/producto_externo_history.read.fields';
import { PRODUCTO_EXTERNO_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/producto_externo_history.filter.fields';
import { PRODUCTO_EXTERNO_HISTORY_SECURITY_DEF } from './security/producto_externo_history.security';
import { PRODUCTO_EXTERNO_HISTORY_GRID_DEF } from './grid/producto_externo_history.grid';
import { PRODUCTO_EXTERNO_HISTORY_I18N_DEF } from './i18n/producto_externo_history.i18n';
import { PRODUCTO_EXTERNO_HISTORY_NAV_DEF } from './navigation/producto_externo_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PRODUCTO_EXTERNO_HISTORY_DEF: CrudDef = { 
    name: 'PRODUCTO_EXTERNO_HISTORY',
    i18n: PRODUCTO_EXTERNO_HISTORY_I18N_DEF,
    grid: PRODUCTO_EXTERNO_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PRODUCTO_EXTERNO_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: PRODUCTO_EXTERNO_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: PRODUCTO_EXTERNO_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  PRODUCTO_EXTERNO_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PRODUCTO_EXTERNO_HISTORY_NAV_DEF,
    security: PRODUCTO_EXTERNO_HISTORY_SECURITY_DEF,
    ws: {
        key: 'PRODUCTO_EXTERNO_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'ExternalProduct/GetVersions'
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

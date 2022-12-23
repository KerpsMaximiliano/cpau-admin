import { NOTICIA_CARROUSEL_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/noticia_carrousel_history.create.fields';
import { NOTICIA_CARROUSEL_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/noticia_carrousel_history.update.fields';
import { NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF } from './form/noticia_carrousel_history.read.fields';
import { NOTICIA_CARROUSEL_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/noticia_carrousel_history.filter.fields';
import { NOTICIA_CARROUSEL_HISTORY_SECURITY_DEF } from './security/noticia_carrousel_history.security';
import { NOTICIA_CARROUSEL_HISTORY_GRID_DEF } from './grid/noticia_carrousel_history.grid';
import { NOTICIA_CARROUSEL_HISTORY_I18N_DEF } from './i18n/noticia_carrousel_history.i18n';
import { NOTICIA_CARROUSEL_HISTORY_NAV_DEF } from './navigation/noticia_carrousel_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const NOTICIA_CARROUSEL_HISTORY_DEF: CrudDef = { 
    name: 'NOTICIA_CARROUSEL_HISTORY',
    i18n: NOTICIA_CARROUSEL_HISTORY_I18N_DEF,
    grid: NOTICIA_CARROUSEL_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: NOTICIA_CARROUSEL_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: NOTICIA_CARROUSEL_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: NOTICIA_CARROUSEL_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  NOTICIA_CARROUSEL_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: NOTICIA_CARROUSEL_HISTORY_NAV_DEF,
    security: NOTICIA_CARROUSEL_HISTORY_SECURITY_DEF,
    ws: {
        key: 'NOTICIA_CARROUSEL_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'NoticiaCarrousel/GetVersions'
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

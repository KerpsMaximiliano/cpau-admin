import { REVISTAS_CREATE_FORM_FIELDS_DEF } from './form/revistas.create.fields';
import { REVISTAS_UPDATE_FORM_FIELDS_DEF } from './form/revistas.update.fields';
import { REVISTAS_READ_FORM_FIELDS_DEF } from './form/revistas.read.fields';
import { REVISTAS_FILTER_FORM_FIELDS_DEF } from './form/revistas.filter.fields';
import { REVISTAS_SECURITY_DEF } from './security/revistas.security';
import { REVISTAS_GRID_DEF } from './grid/revistas.grid';
import { REVISTAS_I18N_DEF } from './i18n/revistas.i18n';
import { REVISTAS_NAV_DEF } from './navigation/revistas.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { environment, PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const REVISTAS_DEF: CrudDef = { 
    name: 'REVISTAS',
    i18n: REVISTAS_I18N_DEF,
    grid: REVISTAS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : REVISTAS_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            fields : REVISTAS_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        } 
    },
    forms: {
        filter: REVISTAS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: REVISTAS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: REVISTAS_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  REVISTAS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: REVISTAS_NAV_DEF,
    security: REVISTAS_SECURITY_DEF,
    ws: {
        key: 'REVISTAS_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Revistas'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    },
};

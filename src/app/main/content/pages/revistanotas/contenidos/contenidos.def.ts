import { CONTENIDOS_CREATE_FORM_FIELDS_DEF } from './form/contenidos.create.fields';
import { CONTENIDOS_UPDATE_FORM_FIELDS_DEF } from './form/contenidos.update.fields';
import { CONTENIDOS_READ_FORM_FIELDS_DEF } from './form/contenidos.read.fields';
import { CONTENIDOS_FILTER_FORM_FIELDS_DEF } from './form/contenidos.filter.fields';
import { CONTENIDOS_SECURITY_DEF } from './security/contenidos.security';
import { CONTENIDOS_GRID_DEF } from './grid/contenidos.grid';
import { CONTENIDOS_I18N_DEF } from './i18n/contenidos.i18n';
import { CONTENIDOS_NAV_DEF } from './navigation/contenidos.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { environment, PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const CONTENIDOS_DEF: CrudDef = { 
    name: 'CONTENIDOS',
    i18n: CONTENIDOS_I18N_DEF,
    grid: CONTENIDOS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : CONTENIDOS_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            fields : CONTENIDOS_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        } 
    },
    forms: {
        filter: CONTENIDOS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: CONTENIDOS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: CONTENIDOS_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  CONTENIDOS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: CONTENIDOS_NAV_DEF,
    security: CONTENIDOS_SECURITY_DEF,
    ws: {
        key: 'CONTENIDOS_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Contenidos'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    },
};

import { AUTORES_CREATE_FORM_FIELDS_DEF } from './form/autores.create.fields';
import { AUTORES_UPDATE_FORM_FIELDS_DEF } from './form/autores.update.fields';
import { AUTORES_READ_FORM_FIELDS_DEF } from './form/autores.read.fields';
import { AUTORES_FILTER_FORM_FIELDS_DEF } from './form/autores.filter.fields';
import { AUTORES_SECURITY_DEF } from './security/autores.security';
import { AUTORES_GRID_DEF } from './grid/autores.grid';
import { AUTORES_I18N_DEF } from './i18n/autores.i18n';
import { AUTORES_NAV_DEF } from './navigation/autores.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const AUTORES_DEF: CrudDef = { 
    name: 'AUTORES',
    i18n: AUTORES_I18N_DEF,
    grid: AUTORES_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : AUTORES_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            fields : AUTORES_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        } 
    },
    forms: {
        filter: AUTORES_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: AUTORES_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: AUTORES_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  AUTORES_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: AUTORES_NAV_DEF,
    security: AUTORES_SECURITY_DEF,
    ws: {
        key: 'AUTORES_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Autores'
    },
    pagination: {
        page: 0,
        pageSize: 10
    },
    dialogConfig: {
        width: '800px'
    }   
};

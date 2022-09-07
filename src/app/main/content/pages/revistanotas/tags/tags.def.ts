import { TAGS_CREATE_FORM_FIELDS_DEF } from './form/tags.create.fields';
import { TAGS_UPDATE_FORM_FIELDS_DEF } from './form/tags.update.fields';
import { TAGS_READ_FORM_FIELDS_DEF } from './form/tags.read.fields';
import { TAGS_FILTER_FORM_FIELDS_DEF } from './form/tags.filter.fields';
import { TAGS_SECURITY_DEF } from './security/tags.security';
import { TAGS_GRID_DEF } from './grid/tags.grid';
import { TAGS_I18N_DEF } from './i18n/tags.i18n';
import { TAGS_NAV_DEF } from './navigation/tags.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';

// Definicion de un template crud(Create,Read,Update and Delete)
export const TAGS_DEF: CrudDef = { 
    name: 'TAGS',
    i18n: TAGS_I18N_DEF,
    grid: TAGS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : TAGS_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            fields : TAGS_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        } 
    },
    forms: {
        filter: TAGS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: TAGS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: TAGS_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  TAGS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: TAGS_NAV_DEF,
    security: TAGS_SECURITY_DEF,
    ws: {
        key: 'TAGS_CRUD_URL',
        url: 'Tags'
    },
    dialogConfig: {
        width: '800px'
    }   
};

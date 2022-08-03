import { REVISTA_CONTENIDOS_CREATE_FORM_FIELDS_DEF } from './form/revista_contenidos.create.fields';
import { REVISTA_CONTENIDOS_UPDATE_FORM_FIELDS_DEF } from './form/revista_contenidos.update.fields';
import { REVISTA_CONTENIDOS_READ_FORM_FIELDS_DEF } from './form/revista_contenidos.read.fields';
import { REVISTA_CONTENIDOS_FILTER_FORM_FIELDS_DEF } from './form/revista_contenidos.filter.fields';
import { REVISTA_CONTENIDOS_SECURITY_DEF } from './security/revista_contenidos.security';
import { REVISTA_CONTENIDOS_GRID_DEF } from './grid/revista_contenidos.grid';
import { REVISTA_CONTENIDOS_I18N_DEF } from './i18n/revista_contenidos.i18n';
import { REVISTA_CONTENIDOS_NAV_DEF } from './navigation/revista_contenidos.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const REVISTA_CONTENIDOS_DEF: CrudDef = { 
    name: 'REVISTA_CONTENIDOS',
    i18n: REVISTA_CONTENIDOS_I18N_DEF,
    grid: REVISTA_CONTENIDOS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : REVISTA_CONTENIDOS_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        }
    },
    forms: {
        filter: REVISTA_CONTENIDOS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: REVISTA_CONTENIDOS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        //update: REVISTA_CONTENIDOS_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        //read:  REVISTA_CONTENIDOS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: REVISTA_CONTENIDOS_NAV_DEF,
    security: REVISTA_CONTENIDOS_SECURITY_DEF,
    ws: {
        key: 'REVISTA_CONTENIDOS_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'RevistaContenidos'
    },
    dialogConfig: {
        width: '800px'
    },
    cancelInitSearch: false,
    filterInMemory: false,
    backButton: true   
};

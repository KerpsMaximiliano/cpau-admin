import { CONTENIDO_AUTORES_CREATE_FORM_FIELDS_DEF } from './form/contenido_autores.create.fields';
import { CONTENIDO_AUTORES_UPDATE_FORM_FIELDS_DEF } from './form/contenido_autores.update.fields';
import { CONTENIDO_AUTORES_READ_FORM_FIELDS_DEF } from './form/contenido_autores.read.fields';
import { CONTENIDO_AUTORES_FILTER_FORM_FIELDS_DEF } from './form/contenido_autores.filter.fields';
import { CONTENIDO_AUTORES_SECURITY_DEF } from './security/contenido_autores.security';
import { CONTENIDO_AUTORES_GRID_DEF } from './grid/contenido_autores.grid';
import { CONTENIDO_AUTORES_I18N_DEF } from './i18n/contenido_autores.i18n';
import { CONTENIDO_AUTORES_NAV_DEF } from './navigation/contenido_autores.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const CONTENIDO_AUTORES_DEF: CrudDef = { 
    name: 'CONTENIDO_AUTORES',
    i18n: CONTENIDO_AUTORES_I18N_DEF,
    grid: CONTENIDO_AUTORES_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : CONTENIDO_AUTORES_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        }
    },
    forms: {
        filter: CONTENIDO_AUTORES_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: CONTENIDO_AUTORES_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: CONTENIDO_AUTORES_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        // read:  CONTENIDO_AUTORES_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: CONTENIDO_AUTORES_NAV_DEF,
    security: CONTENIDO_AUTORES_SECURITY_DEF,
    ws: {
        key: 'CONTENIDO_AUTORES_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'ContenidoAutores'
    },
    dialogConfig: {
        width: '800px'
    },
    cancelInitSearch: false,
    filterInMemory: false,
    backButton: true
};

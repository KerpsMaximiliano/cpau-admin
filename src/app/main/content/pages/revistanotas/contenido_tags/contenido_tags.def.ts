import { CONTENIDO_TAGS_CREATE_FORM_FIELDS_DEF } from './form/contenido_tags.create.fields';
import { CONTENIDO_TAGS_UPDATE_FORM_FIELDS_DEF } from './form/contenido_tags.update.fields';
import { CONTENIDO_TAGS_READ_FORM_FIELDS_DEF } from './form/contenido_tags.read.fields';
import { CONTENIDO_TAGS_FILTER_FORM_FIELDS_DEF } from './form/contenido_tags.filter.fields';
import { CONTENIDO_TAGS_SECURITY_DEF } from './security/contenido_tags.security';
import { CONTENIDO_TAGS_GRID_DEF } from './grid/contenido_tags.grid';
import { CONTENIDO_TAGS_I18N_DEF } from './i18n/contenido_tags.i18n';
import { CONTENIDO_TAGS_NAV_DEF } from './navigation/contenido_tags.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const CONTENIDO_TAGS_DEF: CrudDef = { 
    name: 'CONTENIDO_TAGS',
    i18n: CONTENIDO_TAGS_I18N_DEF,
    grid: CONTENIDO_TAGS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : CONTENIDO_TAGS_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        }
    },
    forms: {
        filter: CONTENIDO_TAGS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: CONTENIDO_TAGS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        //update: CONTENIDO_TAGS_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        //read:  CONTENIDO_TAGS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: CONTENIDO_TAGS_NAV_DEF,
    security: CONTENIDO_TAGS_SECURITY_DEF,
    ws: {
        key: 'CONTENIDO_TAGS_CRUD_URL',
        url: PREFIX_DOMAIN_API + '/ContenidoTags'
    },
    dialogConfig: {
        width: '800px'
    },
    cancelInitSearch: false,
    filterInMemory: false,
    backButton: true,
    pagination: {
        page: 0,
        pageSize: 10
    },
};

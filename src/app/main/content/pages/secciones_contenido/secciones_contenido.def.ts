import { SECCIONES_CONTENIDO_READ_FORM_FIELDS_DEF } from './form/secciones_contenido.read.fields';
import { SECCIONES_CONTENIDO_FILTER_FORM_FIELDS_DEF } from './form/secciones_contenido.filter.fields';
import { SECCIONES_CONTENIDO_SECURITY_DEF } from './security/secciones_contenido.security';
import { SECCIONES_CONTENIDO_GRID_DEF } from './grid/secciones_contenido.grid';
import { SECCIONES_CONTENIDO_I18N_DEF } from './i18n/secciones_contenido.i18n';
import { SECCIONES_CONTENIDO_NAV_DEF } from './navigation/secciones_contenido.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const SECCIONES_CONTENIDO_DEF: CrudDef = { 
    name: 'SECCIONES_CONTENIDO',
    i18n: SECCIONES_CONTENIDO_I18N_DEF,
    grid: SECCIONES_CONTENIDO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.   
    forms: {
        filter: SECCIONES_CONTENIDO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        //read:  SECCIONES_CONTENIDO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: SECCIONES_CONTENIDO_NAV_DEF,
    security: SECCIONES_CONTENIDO_SECURITY_DEF,
    ws: {
        key: 'SECCIONES_CONTENIDO_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'ContentSecciones'
    },
    dialogConfig: {
        width: '800px'
    },
    filterInMemory: false,
    backButton: true
};

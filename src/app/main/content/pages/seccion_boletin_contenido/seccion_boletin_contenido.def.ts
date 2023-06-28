import { SECCION_BOLETIN_CONTENIDO_CREATE_FORM_FIELDS_DEF } from './form/seccion_boletin_contenido.create.fields';
import { SECCION_BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF } from './form/seccion_boletin_contenido.update.fields';
import { SECCION_BOLETIN_CONTENIDO_READ_FORM_FIELDS_DEF } from './form/seccion_boletin_contenido.read.fields';
import { SECCION_BOLETIN_CONTENIDO_FILTER_FORM_FIELDS_DEF } from './form/seccion_boletin_contenido.filter.fields';
import { SECCION_BOLETIN_CONTENIDO_SECURITY_DEF } from './security/seccion_boletin_contenido.security';
import { SECCION_BOLETIN_CONTENIDO_GRID_DEF } from './grid/seccion_boletin_contenido.grid';
import { SECCION_BOLETIN_CONTENIDO_I18N_DEF } from './i18n/seccion_boletin_contenido.i18n';
import { SECCION_BOLETIN_CONTENIDO_NAV_DEF } from './navigation/seccion_boletin_contenido.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const SECCION_BOLETIN_CONTENIDO_DEF: CrudDef = { 
    name: 'SECCION_BOLETIN_CONTENIDO',
    i18n: SECCION_BOLETIN_CONTENIDO_I18N_DEF,
    grid: SECCION_BOLETIN_CONTENIDO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: SECCION_BOLETIN_CONTENIDO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: SECCION_BOLETIN_CONTENIDO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: SECCION_BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  SECCION_BOLETIN_CONTENIDO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: SECCION_BOLETIN_CONTENIDO_NAV_DEF,
    security: SECCION_BOLETIN_CONTENIDO_SECURITY_DEF,
    ws: {
        key: 'SECCION_BOLETIN_CONTENIDO_CRUD_URL', 
        url: PREFIX_DOMAIN_API + 'seccionboletincontenido'
    },
    dialogConfig: {
        width: '400px'
    }   
};

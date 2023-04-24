import { TEMPLATE_CONTENIDO_CREATE_FORM_FIELDS_DEF } from './form/template_contenido.create.fields';
import { TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF } from './form/template_contenido.update.fields';
import { TEMPLATE_CONTENIDO_READ_FORM_FIELDS_DEF } from './form/template_contenido.read.fields';
import { TEMPLATE_CONTENIDO_FILTER_FORM_FIELDS_DEF } from './form/template_contenido.filter.fields';
import { TEMPLATE_CONTENIDO_SECURITY_DEF } from './security/template_contenido.security';
import { TEMPLATE_CONTENIDO_GRID_DEF } from './grid/template_contenido.grid';
import { TEMPLATE_CONTENIDO_I18N_DEF } from './i18n/template_contenido.i18n';
import { TEMPLATE_CONTENIDO_NAV_DEF } from './navigation/template_contenido.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const TEMPLATE_CONTENIDO_DEF: CrudDef = { 
    name: 'TEMPLATE_CONTENIDO',
    i18n: TEMPLATE_CONTENIDO_I18N_DEF,
    grid: TEMPLATE_CONTENIDO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: TEMPLATE_CONTENIDO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: TEMPLATE_CONTENIDO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: TEMPLATE_CONTENIDO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  TEMPLATE_CONTENIDO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: TEMPLATE_CONTENIDO_NAV_DEF,
    security: TEMPLATE_CONTENIDO_SECURITY_DEF,
    ws: {
        key: 'TEMPLATE_CONTENIDO_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'templateContent'
    },
    dialogConfig: {
        width: '400px'
    },

    pagination: {
        page: 0,
        pageSize: 10
    },
    
};

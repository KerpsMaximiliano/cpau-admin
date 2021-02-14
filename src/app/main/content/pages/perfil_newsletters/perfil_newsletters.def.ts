import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { PERFIL_NEWSLETTERS_CREATE_FORM_FIELDS_DEF } from './form/perfil_publicaciones.create.fields';
import { PERFIL_NEWSLETTERS_FILTER_FORM_FIELDS_DEF } from './form/perfil_publicaciones.filter.fields';
import { PERFIL_NEWSLETTERS_READ_FORM_FIELDS_DEF } from './form/perfil_publicaciones.read.fields';
import { PERFIL_NEWSLETTERS_GRID_DEF } from './grid/perfil_newsletters.grid';
import { PERFIL_NEWSLETTERS_I18N_DEF } from './i18n/perfil_newsletters.i18n';
import { PERFIL_NEWSLETTERS_NAV_DEF } from './navigation/perfil_newsletters.nav';
import { PERFIL_NEWSLETTERS_SECURITY_DEF } from './security/perfil_newsletters.security';
// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_NEWSLETTERS_DEF: CrudDef = { 
    name: 'PERFIL_NEWSLETTERS',
    i18n: PERFIL_NEWSLETTERS_I18N_DEF,
    grid: PERFIL_NEWSLETTERS_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PERFIL_NEWSLETTERS_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PERFIL_NEWSLETTERS_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        read:  PERFIL_NEWSLETTERS_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PERFIL_NEWSLETTERS_NAV_DEF,
    security: PERFIL_NEWSLETTERS_SECURITY_DEF,
    ws: {
        key: 'PERFIL_NEWSLETTERS_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'admin/personas/newsletters/'
    },
    dialogConfig: {
        width: '400px'
    },
    filterInMemory: false,
    backButton: true   
};

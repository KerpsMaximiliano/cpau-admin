import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { PERFIL_PUBLICACIONES_CREATE_FORM_FIELDS_DEF } from './form/perfil_publicaciones.create.fields';
import { PERFIL_PUBLICACIONES_FILTER_FORM_FIELDS_DEF } from './form/perfil_publicaciones.filter.fields';
import { PERFIL_PUBLICACIONES_READ_FORM_FIELDS_DEF } from './form/perfil_publicaciones.read.fields';
import { PERFIL_PUBLICACIONES_GRID_DEF } from './grid/perfil_publicaciones.grid';
import { PERFIL_PUBLICACIONES_I18N_DEF } from './i18n/perfil_publicaciones.i18n';
import { PERFIL_PUBLICACIONES_NAV_DEF } from './navigation/perfil_publicaciones.nav';
import { PERFIL_PUBLICACIONES_SECURITY_DEF } from './security/perfil_publicaciones.security';
// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_PUBLICACIONES_DEF: CrudDef = { 
    name: 'PERFIL_PUBLICACIONES',
    i18n: PERFIL_PUBLICACIONES_I18N_DEF,
    grid: PERFIL_PUBLICACIONES_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PERFIL_PUBLICACIONES_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PERFIL_PUBLICACIONES_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // read:  PERFIL_PUBLICACIONES_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PERFIL_PUBLICACIONES_NAV_DEF,
    security: PERFIL_PUBLICACIONES_SECURITY_DEF,
    ws: {
        key: 'PERFIL_PUBLICACIONES_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'admin/personas/publicaciones/'
    },
    dialogConfig: {
        width: '400px'
    },
    filterInMemory: false,
    backButton: true   
};

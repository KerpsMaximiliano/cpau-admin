import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { PERFIL_ROL_CREATE_FORM_FIELDS_DEF } from './form/perfil_rol.create.fields';
import { PERFIL_ROL_FILTER_FORM_FIELDS_DEF } from './form/perfil_rol.filter.fields';
import { PERFIL_ROL_GRID_DEF } from './grid/perfil_rol.grid';
import { PERFIL_ROL_I18N_DEF } from './i18n/perfil_rol.i18n';
import { PERFIL_ROL_NAV_DEF } from './navigation/perfil_rol.nav';
import { PERFIL_ROL_SECURITY_DEF } from './security/perfil_rol.security';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_ROL_DEF: CrudDef = { 
    name: 'PERFIL_ROL',
    i18n: PERFIL_ROL_I18N_DEF,
    grid: PERFIL_ROL_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PERFIL_ROL_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PERFIL_ROL_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
    },
    navigation: PERFIL_ROL_NAV_DEF,
    security: PERFIL_ROL_SECURITY_DEF,
    ws: {
        key: 'PERFIL_ROL_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'admin/personas/roles/'
    },
    dialogConfig: {
        width: '800px'
    },
    filterInMemory: false,
    backButton: true   
};

import { ABM_ROLES_CREATE_FORM_FIELDS_DEF } from './form/abm_roles.create.fields';
import { ABM_ROLES_UPDATE_FORM_FIELDS_DEF } from './form/abm_roles.update.fields';
import { ABM_ROLES_READ_FORM_FIELDS_DEF } from './form/abm_roles.read.fields';
import { ABM_ROLES_FILTER_FORM_FIELDS_DEF } from './form/abm_roles.filter.fields';
import { ABM_ROLES_SECURITY_DEF } from './security/abm_roles.security';
import { ABM_ROLES_GRID_DEF } from './grid/abm_roles.grid';
import { ABM_ROLES_I18N_DEF } from './i18n/abm_roles.i18n';
import { ABM_ROLES_NAV_DEF } from './navigation/abm_roles.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const ABM_ROLES_DEF: CrudDef = { 
    name: 'ABM_ROLES',
    i18n: ABM_ROLES_I18N_DEF,
    grid: ABM_ROLES_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: ABM_ROLES_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: ABM_ROLES_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: ABM_ROLES_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  ABM_ROLES_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: ABM_ROLES_NAV_DEF,
    security: ABM_ROLES_SECURITY_DEF,
    ws: {
        key: 'ABM_ROLES_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Role'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    }
};

import { USER_ADMIN_CREATE_FORM_FIELDS_DEF } from './form/user_admin.create.fields';
import { USER_ADMIN_UPDATE_FORM_FIELDS_DEF } from './form/user_admin.update.fields';
import { USER_ADMIN_READ_FORM_FIELDS_DEF } from './form/user_admin.read.fields';
import { USER_ADMIN_FILTER_FORM_FIELDS_DEF } from './form/user_admin.filter.fields';
import { USER_ADMIN_SECURITY_DEF } from './security/user_admin.security';
import { USER_ADMIN_GRID_DEF } from './grid/user_admin.grid';
import { USER_ADMIN_I18N_DEF } from './i18n/user_admin.i18n';
import { USER_ADMIN_NAV_DEF } from './navigation/user_admin.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const USER_ADMIN_DEF: CrudDef = { 
    name: 'USER_ADMIN',
    i18n: USER_ADMIN_I18N_DEF,
    grid: USER_ADMIN_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: USER_ADMIN_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: USER_ADMIN_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: USER_ADMIN_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        // read:  USER_ADMIN_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: USER_ADMIN_NAV_DEF,
    security: USER_ADMIN_SECURITY_DEF,
    ws: {
        key: 'USER_ADMIN_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'userAdmin'
    },
    dialogConfig: {
        width: '400px'
    }   
};

import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PERFIL_TELEFONO_SECURITY_DEF } from './security/perfil_telefono.security';
import { PERFIL_TELEFONO_NAV_DEF } from './navigation/perfil_telefono.nav';
import { PERFIL_TELEFONO_I18N_DEF } from './i18n/perfil_telefono.i18n';
import { PERFIL_TELEFONO_GRID_DEF } from './grid/perfil_telefono.grid';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_TELEFONO_DEF: CrudDef = { 
    name: 'PERFIL_TELEFONO',
    i18n: PERFIL_TELEFONO_I18N_DEF,
    grid: PERFIL_TELEFONO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        // filter: PERFIL_TELEFONO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: PERFIL_TELEFONO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: PERFIL_TELEFONO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        // read:  PERFIL_TELEFONO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PERFIL_TELEFONO_NAV_DEF,
    security: PERFIL_TELEFONO_SECURITY_DEF,
    ws: {
        key: 'PERFIL_TELEFONO_CRUD_URL',
        url: '/admin/personas/contactos/telefono'
    },
    dialogConfig: {
        width: '400px'
    },
    filterInMemory: false,
    backButton: true   
};

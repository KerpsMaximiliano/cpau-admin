import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { PERFIL_REDES_SOCIALES_CREATE_FORM_FIELDS_DEF } from './form/perfil_redes_sociales.create.fields';
import { PERFIL_REDES_SOCIALES_FILTER_FORM_FIELDS_DEF } from './form/perfil_redes_sociales.filter.fields';
import { PERFIL_REDES_SOCIALES_READ_FORM_FIELDS_DEF } from './form/perfil_redes_sociales.read.fields';
import { PERFIL_REDES_SOCIALES_UPDATE_FORM_FIELDS_DEF } from './form/perfil_redes_sociales.update.fields';
import { PERFIL_REDES_SOCIALES_GRID_DEF } from './grid/perfil_redes_sociales.grid';
import { PERFIL_REDES_SOCIALES_I18N_DEF } from './i18n/perfil_redes_sociales.i18n';
import { PERFIL_REDES_SOCIALES_NAV_DEF } from './navigation/perfil_redes_sociales.nav';
import { PERFIL_REDES_SOCIALES_SECURITY_DEF } from './security/perfil_redes_sociales.security';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_REDES_SOCIALES_DEF: CrudDef = { 
    name: 'PERFIL_REDES_SOCIALES',
    i18n: PERFIL_REDES_SOCIALES_I18N_DEF,
    grid: PERFIL_REDES_SOCIALES_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PERFIL_REDES_SOCIALES_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PERFIL_REDES_SOCIALES_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: PERFIL_REDES_SOCIALES_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  PERFIL_REDES_SOCIALES_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PERFIL_REDES_SOCIALES_NAV_DEF,
    security: PERFIL_REDES_SOCIALES_SECURITY_DEF,
    ws: {
        key: 'PERFIL_REDES_SOCIALES_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'admin/personas/redsocial'
    },
    dialogConfig: {
        width: '400px'
    },
    filterInMemory: false,
    backButton: true   
};

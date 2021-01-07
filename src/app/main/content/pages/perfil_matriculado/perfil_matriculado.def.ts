import { PERFIL_MATRICULADO_CREATE_FORM_FIELDS_DEF } from './form/perfil_matriculado.create.fields';
import { PERFIL_MATRICULADO_UPDATE_FORM_FIELDS_DEF } from './form/perfil_matriculado.update.fields';
import { PERFIL_MATRICULADO_READ_FORM_FIELDS_DEF } from './form/perfil_matriculado.read.fields';
import { PERFIL_MATRICULADO_FILTER_FORM_FIELDS_DEF } from './form/perfil_matriculado.filter.fields';
import { PERFIL_MATRICULADO_SECURITY_DEF } from './security/perfil_matriculado.security';
import { PERFIL_MATRICULADO_GRID_DEF } from './grid/perfil_matriculado.grid';
import { PERFIL_MATRICULADO_I18N_DEF } from './i18n/perfil_matriculado.i18n';
import { PERFIL_MATRICULADO_NAV_DEF } from './navigation/perfil_matriculado.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_MATRICULADO_DEF: CrudDef = { 
    name: 'PERFIL_MATRICULADO',
    i18n: PERFIL_MATRICULADO_I18N_DEF,
    grid: PERFIL_MATRICULADO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PERFIL_MATRICULADO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PERFIL_MATRICULADO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: PERFIL_MATRICULADO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  PERFIL_MATRICULADO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PERFIL_MATRICULADO_NAV_DEF,
    security: PERFIL_MATRICULADO_SECURITY_DEF,
    ws: {
        key: 'PERFIL_MATRICULADO_CRUD_URL',
        url: '/admin/personas/matriculado'
    },
    dialogConfig: {
        width: '400px'
    }   
};

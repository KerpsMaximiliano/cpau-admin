import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PERFIL_MATRICULADO_UPLOAD_I18N_DEF } from './i18n/perfil_matriculado_upload.i18n';
import { PERFIL_MATRICULADO_UPLOAD_NAV_DEF } from './navigation/perfil_matriculado_upload.nav';
import { PERFIL_MATRICULADO_UPLOAD_SECURITY_DEF } from './security/perfil_matriculado_upload.security';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PERFIL_MATRICULADO_UPLOAD_DEF: CrudDef = { 
    name: 'PERFIL_MATRICULADO_UPLOAD',
    i18n: PERFIL_MATRICULADO_UPLOAD_I18N_DEF,
    navigation: PERFIL_MATRICULADO_UPLOAD_NAV_DEF,
    security: PERFIL_MATRICULADO_UPLOAD_SECURITY_DEF,
};

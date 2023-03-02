import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { NO_CONTENT_I18N_DEF } from './i18n/no_content.i18n';
import { NO_CONTENT_NAV_DEF } from './navigation/no_content.nav';


// Definicion de un template crud(Create,Read,Update and Delete)
export const NO_CONTENT_DEF: CrudDef = { 
    name: 'NO_CONTENT',
    i18n: NO_CONTENT_I18N_DEF,
    navigation: NO_CONTENT_NAV_DEF,
};

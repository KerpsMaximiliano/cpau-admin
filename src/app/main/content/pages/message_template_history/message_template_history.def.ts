import { MESSAGE_TEMPLATE_HISTORY_CREATE_FORM_FIELDS_DEF } from './form/message_template_history.create.fields';
import { MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF } from './form/message_template_history.update.fields';
import { MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF } from './form/message_template_history.read.fields';
import { MESSAGE_TEMPLATE_HISTORY_FILTER_FORM_FIELDS_DEF } from './form/message_template_history.filter.fields';
import { MESSAGE_TEMPLATE_HISTORY_SECURITY_DEF } from './security/message_template_history.security';
import { MESSAGE_TEMPLATE_HISTORY_GRID_DEF } from './grid/message_template_history.grid';
import { MESSAGE_TEMPLATE_HISTORY_I18N_DEF } from './i18n/message_template_history.i18n';
import { MESSAGE_TEMPLATE_HISTORY_NAV_DEF } from './navigation/message_template_history.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const MESSAGE_TEMPLATE_HISTORY_DEF: CrudDef = { 
    name: 'MESSAGE_TEMPLATE_HISTORY',
    i18n: MESSAGE_TEMPLATE_HISTORY_I18N_DEF,
    grid: MESSAGE_TEMPLATE_HISTORY_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: MESSAGE_TEMPLATE_HISTORY_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        // create: MESSAGE_TEMPLATE_HISTORY_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        // update: MESSAGE_TEMPLATE_HISTORY_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  MESSAGE_TEMPLATE_HISTORY_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: MESSAGE_TEMPLATE_HISTORY_NAV_DEF,
    security: MESSAGE_TEMPLATE_HISTORY_SECURITY_DEF,
    ws: {
        key: 'MESSAGE_TEMPLATE_HISTORY_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'MessageTemplate/GetVersions'
    },
    dialogConfig: {
        width: '800px'
    },
    filterInMemory: false,
    backButton: true,
    serverPagination: true,
    pagination: {
        page: 0,
        pageSize: 10
    },
    cancelInitSearch: false  

};

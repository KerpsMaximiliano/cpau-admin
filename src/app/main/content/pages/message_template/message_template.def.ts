import { MESSAGE_TEMPLATE_CREATE_FORM_FIELDS_DEF } from './form/message_template.create.fields';
import { MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF } from './form/message_template.update.fields';
import { MESSAGE_TEMPLATE_READ_FORM_FIELDS_DEF } from './form/message_template.read.fields';
import { MESSAGE_TEMPLATE_FILTER_FORM_FIELDS_DEF } from './form/message_template.filter.fields';
import { MESSAGE_TEMPLATE_SECURITY_DEF } from './security/message_template.security';
import { MESSAGE_TEMPLATE_GRID_DEF } from './grid/message_template.grid';
import { MESSAGE_TEMPLATE_I18N_DEF } from './i18n/message_template.i18n';
import { MESSAGE_TEMPLATE_NAV_DEF } from './navigation/message_template.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const MESSAGE_TEMPLATE_DEF: CrudDef = { 
    name: 'MESSAGE_TEMPLATE',
    i18n: MESSAGE_TEMPLATE_I18N_DEF,
    grid: MESSAGE_TEMPLATE_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef: {
        create: {
            showSubmitContinue: true,
            fields: MESSAGE_TEMPLATE_CREATE_FORM_FIELDS_DEF
        },
        update: {
            showSubmitContinue: true,
            fields: MESSAGE_TEMPLATE_UPDATE_FORM_FIELDS_DEF
        },
    },
    forms: {
        filter: MESSAGE_TEMPLATE_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        read:  MESSAGE_TEMPLATE_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: MESSAGE_TEMPLATE_NAV_DEF,
    security: MESSAGE_TEMPLATE_SECURITY_DEF,
    ws: {
        key: 'MESSAGE_TEMPLATE_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'MessageTemplate'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    }
};

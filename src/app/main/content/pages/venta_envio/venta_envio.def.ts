import { VENTA_ENVIO_CREATE_FORM_FIELDS_DEF } from './form/venta_envio.create.fields';
import { VENTA_ENVIO_UPDATE_FORM_FIELDS_DEF } from './form/venta_envio.update.fields';
import { VENTA_ENVIO_READ_FORM_FIELDS_DEF } from './form/venta_envio.read.fields';
import { VENTA_ENVIO_FILTER_FORM_FIELDS_DEF } from './form/venta_envio.filter.fields';
import { VENTA_ENVIO_SECURITY_DEF } from './security/venta_envio.security';
import { VENTA_ENVIO_GRID_DEF } from './grid/venta_envio.grid';
import { VENTA_ENVIO_I18N_DEF } from './i18n/venta_envio.i18n';
import { VENTA_ENVIO_NAV_DEF } from './navigation/venta_envio.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const VENTA_ENVIO_DEF: CrudDef = { 
    name: 'VENTA_ENVIO',
    i18n: VENTA_ENVIO_I18N_DEF,
    grid: VENTA_ENVIO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: VENTA_ENVIO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: VENTA_ENVIO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: VENTA_ENVIO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  VENTA_ENVIO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: VENTA_ENVIO_NAV_DEF,
    security: VENTA_ENVIO_SECURITY_DEF,
    ws: {
        key: 'VENTA_ENVIO_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'VentaEnvio'
    },
    dialogConfig: {
        width: '400px'
    },
    backButton: true
};

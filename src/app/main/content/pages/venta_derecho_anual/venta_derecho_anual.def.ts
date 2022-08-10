import { VENTA_DERECHO_ANUAL_CREATE_FORM_FIELDS_DEF } from './form/venta_derecho_anual.create.fields';
import { VENTA_DERECHO_ANUAL_UPDATE_FORM_FIELDS_DEF } from './form/venta_derecho_anual.update.fields';
import { VENTA_DERECHO_ANUAL_READ_FORM_FIELDS_DEF } from './form/venta_derecho_anual.read.fields';
import { VENTA_DERECHO_ANUAL_FILTER_FORM_FIELDS_DEF } from './form/venta_derecho_anual.filter.fields';
import { VENTA_DERECHO_ANUAL_SECURITY_DEF } from './security/venta_derecho_anual.security';
import { VENTA_DERECHO_ANUAL_GRID_DEF } from './grid/venta_derecho_anual.grid';
import { VENTA_DERECHO_ANUAL_I18N_DEF } from './i18n/venta_derecho_anual.i18n';
import { VENTA_DERECHO_ANUAL_NAV_DEF } from './navigation/venta_derecho_anual.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const VENTA_DERECHO_ANUAL_DEF: CrudDef = { 
    name: 'VENTA_DERECHO_ANUAL',
    i18n: VENTA_DERECHO_ANUAL_I18N_DEF,
    grid: VENTA_DERECHO_ANUAL_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: VENTA_DERECHO_ANUAL_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: VENTA_DERECHO_ANUAL_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: VENTA_DERECHO_ANUAL_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  VENTA_DERECHO_ANUAL_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: VENTA_DERECHO_ANUAL_NAV_DEF,
    security: VENTA_DERECHO_ANUAL_SECURITY_DEF,
    ws: {
        key: 'VENTA_DERECHO_ANUAL_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'VentaDerechoAnual'
    },
    dialogConfig: {
        width: '400px'
    }   
};

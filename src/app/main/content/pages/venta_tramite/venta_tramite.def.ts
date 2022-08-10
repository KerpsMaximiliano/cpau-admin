import { VENTA_TRAMITE_CREATE_FORM_FIELDS_DEF } from './form/venta_tramite.create.fields';
import { VENTA_TRAMITE_UPDATE_FORM_FIELDS_DEF } from './form/venta_tramite.update.fields';
import { VENTA_TRAMITE_READ_FORM_FIELDS_DEF } from './form/venta_tramite.read.fields';
import { VENTA_TRAMITE_FILTER_FORM_FIELDS_DEF } from './form/venta_tramite.filter.fields';
import { VENTA_TRAMITE_SECURITY_DEF } from './security/venta_tramite.security';
import { VENTA_TRAMITE_GRID_DEF } from './grid/venta_tramite.grid';
import { VENTA_TRAMITE_I18N_DEF } from './i18n/venta_tramite.i18n';
import { VENTA_TRAMITE_NAV_DEF } from './navigation/venta_tramite.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const VENTA_TRAMITE_DEF: CrudDef = { 
    name: 'VENTA_TRAMITE',
    i18n: VENTA_TRAMITE_I18N_DEF,
    grid: VENTA_TRAMITE_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: VENTA_TRAMITE_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: VENTA_TRAMITE_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: VENTA_TRAMITE_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  VENTA_TRAMITE_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: VENTA_TRAMITE_NAV_DEF,
    security: VENTA_TRAMITE_SECURITY_DEF,
    ws: {
        key: 'VENTA_TRAMITE_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'VentaTramite'
    },
    dialogConfig: {
        width: '400px'
    }   
};

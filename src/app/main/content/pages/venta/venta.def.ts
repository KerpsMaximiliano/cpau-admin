import { VENTA_CREATE_FORM_FIELDS_DEF } from './form/venta.create.fields';
import { VENTA_UPDATE_FORM_FIELDS_DEF } from './form/venta.update.fields';
import { VENTA_READ_FORM_FIELDS_DEF } from './form/venta.read.fields';
import { VENTA_FILTER_FORM_FIELDS_DEF } from './form/venta.filter.fields';
import { VENTA_SECURITY_DEF } from './security/venta.security';
import { VENTA_GRID_DEF } from './grid/venta.grid';
import { VENTA_I18N_DEF } from './i18n/venta.i18n';
import { VENTA_NAV_DEF } from './navigation/venta.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const VENTA_DEF: CrudDef = { 
    name: 'VENTA',
    i18n: VENTA_I18N_DEF,
    grid: VENTA_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: VENTA_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        //create: VENTA_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        //update: VENTA_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        // read:  VENTA_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: VENTA_NAV_DEF,
    security: VENTA_SECURITY_DEF,
    ws: {
        key: 'VENTA_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Venta'
    },
    dialogConfig: {
        width: '500px'
    },
    exportCsv: {
        csvExportFileName: 'Ventas.csv',
        ws: PREFIX_DOMAIN_API + `ventas/export`
    },
    filterInMemory: false,
    serverPagination: true,
    pagination: {
        page: 0,
        pageSize: 10
    },
    cancelInitSearch: false
    
};

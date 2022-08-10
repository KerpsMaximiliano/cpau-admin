import { VENTA_PRODUCTO_CREATE_FORM_FIELDS_DEF } from './form/venta_producto.create.fields';
import { VENTA_PRODUCTO_UPDATE_FORM_FIELDS_DEF } from './form/venta_producto.update.fields';
import { VENTA_PRODUCTO_READ_FORM_FIELDS_DEF } from './form/venta_producto.read.fields';
import { VENTA_PRODUCTO_FILTER_FORM_FIELDS_DEF } from './form/venta_producto.filter.fields';
import { VENTA_PRODUCTO_SECURITY_DEF } from './security/venta_producto.security';
import { VENTA_PRODUCTO_GRID_DEF } from './grid/venta_producto.grid';
import { VENTA_PRODUCTO_I18N_DEF } from './i18n/venta_producto.i18n';
import { VENTA_PRODUCTO_NAV_DEF } from './navigation/venta_producto.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const VENTA_PRODUCTO_DEF: CrudDef = { 
    name: 'VENTA_PRODUCTO',
    i18n: VENTA_PRODUCTO_I18N_DEF,
    grid: VENTA_PRODUCTO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: VENTA_PRODUCTO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: VENTA_PRODUCTO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: VENTA_PRODUCTO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  VENTA_PRODUCTO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: VENTA_PRODUCTO_NAV_DEF,
    security: VENTA_PRODUCTO_SECURITY_DEF,
    ws: {
        key: PREFIX_DOMAIN_API + 'VENTA_PRODUCTO_CRUD_URL',
        url: 'VentaProducto'
    },
    dialogConfig: {
        width: '400px'
    }   
};

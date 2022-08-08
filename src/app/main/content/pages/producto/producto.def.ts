import { PRODUCTO_CREATE_FORM_FIELDS_DEF } from './form/producto.create.fields';
import { PRODUCTO_UPDATE_FORM_FIELDS_DEF } from './form/producto.update.fields';
import { PRODUCTO_READ_FORM_FIELDS_DEF } from './form/producto.read.fields';
import { PRODUCTO_FILTER_FORM_FIELDS_DEF } from './form/producto.filter.fields';
import { PRODUCTO_SECURITY_DEF } from './security/producto.security';
import { PRODUCTO_GRID_DEF } from './grid/producto.grid';
import { PRODUCTO_I18N_DEF } from './i18n/producto.i18n';
import { PRODUCTO_NAV_DEF } from './navigation/producto.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const PRODUCTO_DEF: CrudDef = { 
    name: 'PRODUCTO',
    i18n: PRODUCTO_I18N_DEF,
    grid: PRODUCTO_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    forms: {
        filter: PRODUCTO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        create: PRODUCTO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
        update: PRODUCTO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
        read:  PRODUCTO_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: PRODUCTO_NAV_DEF,
    security: PRODUCTO_SECURITY_DEF,
    ws: {
        key: 'PRODUCTO_CRUD_URL',
        url: PREFIX_DOMAIN_API +  'Producto'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    }
};

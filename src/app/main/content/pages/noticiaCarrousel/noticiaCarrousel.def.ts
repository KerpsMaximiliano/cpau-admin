
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { NOTICIA_CARROUSEL_CREATE_FORM_FIELDS_DEF } from './form/noticiaCarrousel.create.fields';
import { NOTICIA_CARROUSEL_FILTER_FORM_FIELDS_DEF } from './form/noticiaCarrousel.filter.fields';
import { NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF } from './form/noticiaCarrousel.update.fields';
import { NOTICIA_CARROUSEL_GRID_DEF } from './grid/noticiaCarrousel.grid';
import { NOTICIA_CARROUSEL_I18N_DEF } from './i18n/noticiaCarrousel.i18n';
import { NOTICIA_CARROUSEL_NAV_DEF } from './navigation/noticiaCarrousel.nav';
import { NOTICIA_CARROUSEL_SECURITY_DEF } from './security/noticiaCarrousel.security';

// Definicion de un template crud(Create,Read,Update and Delete)
export const NOTICIA_CARROUSEL_DEF: CrudDef = { 
    name: 'NOTICIA_CARROUSEL',
    i18n: NOTICIA_CARROUSEL_I18N_DEF,
    grid: NOTICIA_CARROUSEL_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef: {
      create: {
        fields: NOTICIA_CARROUSEL_CREATE_FORM_FIELDS_DEF,
        showSubmitContinue: true
      },        
      update: {
          fields: NOTICIA_CARROUSEL_UPDATE_FORM_FIELDS_DEF,
          showSubmitContinue: true
      }  
    },
    forms: {
        filter: NOTICIA_CARROUSEL_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
    },
    navigation: NOTICIA_CARROUSEL_NAV_DEF,
    security: NOTICIA_CARROUSEL_SECURITY_DEF,
    ws: {
        key: 'NOTICIA_CARROUSEL_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'NoticiaCarrousel'
    },
    dialogConfig: {
        width: '800px'
    },
    pagination: {
        page: 0,
        pageSize: 10
    }
};

import { SEGURIDAD_GRUPO_USUARIO_CREATE_FORM_FIELDS_DEF } from "./form/seguridad_grupo_usuario.create.fields";
import { SEGURIDAD_GRUPO_USUARIO_FILTER_FORM_FIELDS_DEF } from "./form/seguridad_grupo_usuario.filter.fields";
import { ANALITYCS_USER_SECURITY_DEF } from "./security/analytics.security";
import { ANALYTICS_USER_GRID_DEF } from "./grid/analytics_user.grid";
import { ANALYTICS_USER_NAV_DEF } from "./navigation/analytics_user.nav";

// * CRUD.
import { CrudDef } from "app/modules/fwk/core/model/component-def/crud-def";

// * PREFIX.
import { PREFIX_DOMAIN_API } from "environments/environment";

// * ANALYTICS COMPONENTS.
import { ANALYTICS_USER_I18N_DEF } from "./i18n/analytics_user.i18n";

// Definicion de un template crud(Create, Read, Update and Delete)
export const ANALYTICS_USER_DEF: CrudDef = {
  // name: 'SEGURIDAD_GRUPO_USUARIO',
  name: "ANALYTICS_USER",
  i18n: ANALYTICS_USER_I18N_DEF,
  grid: ANALYTICS_USER_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
  formsDef: {
    create: {
      showSubmitContinue: true,
      fields: SEGURIDAD_GRUPO_USUARIO_CREATE_FORM_FIELDS_DEF,
    },
  },
  forms: {
    filter: SEGURIDAD_GRUPO_USUARIO_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
    create: SEGURIDAD_GRUPO_USUARIO_CREATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de alta, entonces se agrega su definicion.
    // update: SEGURIDAD_GRUPO_USUARIO_UPDATE_FORM_FIELDS_DEF, // Si el crud tiene formulario de modificacion, entonces se agrega su definicion.
    // read: SEGURIDAD_GRUPO_USUARIO_READ_FORM_FIELDS_DEF, // Si existe un formulario de edicion no exite uno de solo lectura
  },
  navigation: ANALYTICS_USER_NAV_DEF,
  security: ANALITYCS_USER_SECURITY_DEF,
  ws: {
    key: "ANALYTICS_USER_CRUD_URL",
    url: PREFIX_DOMAIN_API + "analytics_user",
  },
  dialogConfig: {
    width: "600px",
  },
  filterInMemory: false,
  backButton: true,
  serverPagination: false,
  pagination: {
    page: 0,
    pageSize: 10,
  },
  cancelInitSearch: false,
};

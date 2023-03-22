import { PREFIX_DOMAIN_API } from "environments/environment";

export const SEGURIDAD_GRUPO_USUARIO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'grupo',
    labelKey: 'seguridad_grupo_usuario_create_form_fields_def_field_idgrupo',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'idGrupo',
      elementLabel: 'nombre',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        nombre: 'grupo'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Grupo/FilterGrupoByNombre'
    }
  },

  {
    key: 'idGrupo',
    controlType: 'hidden'
  },



  {
    key: 'idUsuario',
    labelKey: 'seguridad_grupo_usuario_create_form_fields_def_field_idusuario',
    label: 'Usuario',
    type: 'number',
    controlType: 'hidden',
    mappingQuerystring: true
  }
];

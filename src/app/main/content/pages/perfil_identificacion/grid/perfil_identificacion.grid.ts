import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_IDENTIFICACION_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'perfil_identificacion_grid_def_column_id'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'perfil_identificacion_grid_def_column_tipo'
    },
    {
      columnDef: 'matricula',
      columnNameKey: 'perfil_identificacion_grid_def_column_matricula'
    },
    {
      columnDef: 'estado',
      columnNameKey: 'perfil_identificacion_grid_def_column_estado'
    },
    {
      columnDef: 'nombre',
      columnNameKey: 'perfil_identificacion_grid_def_column_nombre'
    },
    {
      columnDef: 'apellido',
      columnNameKey: 'perfil_identificacion_grid_def_column_apellido'
    },
    {
      columnDef: 'email',
      columnNameKey: 'perfil_identificacion_grid_def_column_email'
    },
    {
      columnDef: 'tipoDocumento',
      columnNameKey: 'perfil_identificacion_grid_def_column_tipodocumento'
    },
    {
      columnDef: 'numeroDocumento',
      columnNameKey: 'perfil_identificacion_grid_def_column_numerodocumento'
    },
    {
      columnDef: 'usuario',
      columnNameKey: 'perfil_identificacion_grid_def_column_usuario'
    },
    {
      columnDef: 'fechaNacimiento',
      columnNameKey: 'perfil_identificacion_grid_def_column_fechanacimiento'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'tipo',
    'matricula',
    'estado',
    'nombre',
    'apellido',
    'email',
    'tipoDocumento',
    'numeroDocumento',
    'usuario',
    'fechaNacimiento'
  ],
  actions: [
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_domicilio',
      actionType: 'redirect',
      redirect: {
        url: '/perfilDomicilio',
        querystring: {
          idContact : 'idContact'
        }
      },
      icon: 'home'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_email',
      actionType: 'redirect',
      redirect: {
        url: '/perfilEmail',
        querystring: {
          idContact : 'idContact'
        }
      },
      icon: 'email'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_telefono',
      actionType: 'redirect',
      redirect: {
        url: '/perfilTelefono',
        querystring: {
          idContact : 'idContact',
        }
      },
      icon: 'phone'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_matriculado',
      icon: 'description',
      form: [
        {
          label: 'id',
          key: 'idContact',
          controlType: 'hidden',
        },
        {
          labelKey: 'matricula_create_form_fields_def_field_tipo',
          key: 'tipo',
          controlType: 'textbox',
          disabled: true
        },
        {
          labelKey: 'matricula_create_form_fields_def_field_numero',
          key: 'numero',
          controlType: 'textbox',
          disabled: true
        },
        {
          labelKey: 'matricula_create_form_fields_def_field_estado',
          key: 'estado',
          controlType: 'textbox',
          disabled: true
        },
        {
          labelKey: 'matricula_create_form_fields_def_field_universidad',
          key: 'universidad',
          controlType: 'textbox',
          disabled: true
        },
        {
          labelKey: 'matricula_create_form_fields_def_field_pagoOnlinePermitido',
          key: 'pagoOnlinePermitido',
          type: 'boolean',
          controlType: 'checkbox',
          disabled: false
        },
        {
          key: 'fechaMatriculacion',
          labelKey: 'matricula_create_form_fields_def_field_fechaMatriculacion',
          controlType: 'datepicker',
          required: true,
          disabled: false
        },
        {
          key: 'fechaEgreso',
          labelKey: 'matricula_create_form_fields_def_field_fechaEgreso',
          controlType: 'datepicker',
          required: true,
          disabled: false
        }
      ],
      ws: {
        key: 'matricula_create_form_fields_def_field_editar',
        url: PREFIX_DOMAIN_API + 'admin/personas/matriculado',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_redes',
      actionType: 'redirect',
      redirect: {
        url: '/perfilRedesSociales',
        querystring: {
          idContact : 'idContact',
        }
      },
      icon: 'people'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_cuentacorriente',
      actionType: 'redirect',
      redirect: {
        url: '/perfilCuentaCorriente',
        querystring: {
          idContact : 'idContact',
        }
      },
      icon: 'account_balance'
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_cuenta',
      icon: 'person',
      form: [
        {
          label: 'id',
          key: 'idContact',
          controlType: 'hidden'
        },
        {
          labelKey: 'seccion_create_form_fields_def_field_seccion',
          key: 'name',
          controlType: 'textbox',
          disabled: true
        },
        {
          key: 'newParent',
          labelKey: 'seccion_create_form_fields_def_field_seccion_mover',
          label: 'Mover a la Sección',
          controlType: 'autocomplete-desplegable',
          options: {
            transferIdToField: 'newParentId',
            elementLabel: 'nombre',
            elementValue: 'id',
            useNativeFilter: false,
            selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
          },
          apiOptions: {
            queryString: {
              filter: 'newParent'
            },
            defaultShow: 20,
            url: PREFIX_DOMAIN_API + 'Section/SeccionRuta'
          }
        },
        {
          key: 'newParentId',
          controlType: 'hidden'
        },
      ],
      ws: {
        key: 'seccion_grid_def_button_action_nueva_mover_seccion',
        url: PREFIX_DOMAIN_API + 'personas/cuenta',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_publicaciones',
      actionType: 'redirect',
      redirect: {
        url: '/perfilPublicaciones',
        querystring: {
          idContact : 'idContact',
        }
      },
      icon: 'public'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_newsletter',
      actionType: 'redirect',
      redirect: {
        url: '/perfiNewsletter',
        querystring: {
          idContact : 'idContact',
        }
      },
      icon: 'feed'
    },
  ],
};

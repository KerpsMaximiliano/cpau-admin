import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_IDENTIFICACION_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'idUser',
      columnNameKey: 'perfil_identificacion_grid_def_column_id'
    },
    {
      columnDef: 'idContact',
      id: true,
      columnNameKey: 'perfil_identificacion_grid_def_column_idContact'
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
      columnNameKey: 'TD'
    },
    {
      columnDef: 'numeroDocumento',
      columnNameKey: 'ND'
    },
    {
      columnDef: 'username',
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
    'username',
    // 'fechaNacimiento'
  ],
  actions: [
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_borrar_contacto',
      icon: 'person_off',
      confirm: true,
      ws: {
        key: 'section_content_grid_def_button_action_marcar_destacado',
        url: PREFIX_DOMAIN_API + '/admin/personas/contactos/',
        method: 'DELETE'
      }
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_domicilio',
      actionType: 'redirect',
      redirect: {
        url: '/perfilDomicilio',
        querystring: {
          idContact : 'idContact',
          parentTitle: 'apellido'
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
          idContact : 'idContact',
          parentTitle: 'apellido'
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
          parentTitle: 'apellido'
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
          key: 'matricula',
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
          type: 'hidden',
          controlType: 'hidden',
          disabled: false
        },
        {
          key: 'fechaMatriculacion',
          labelKey: 'matricula_create_form_fields_def_field_fechaMatriculacion',
          controlType: 'textbox',
          required: true,
          disabled: true
        },
        {
          key: 'fechaEgreso',
          labelKey: 'matricula_create_form_fields_def_field_fechaEgreso',
          controlType: 'textbox',
          required: true,
          disabled: true
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
          parentTitle: 'apellido'
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
          parentTitle: 'apellido'
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
          key: 'idUser',
          controlType: 'hidden'
        },
        {
          labelKey: 'perfil_cuenta_create_form_fields_def_field_username',
          key: 'username',
          controlType: 'textbox',
        },
        {
          labelKey: 'perfil_cuenta_create_form_fields_def_field_fechaAlta',
          key: 'fechaAlta',
          controlType: 'datepicker',
          disabled: true
        },
        {
          labelKey: 'perfil_cuenta_create_form_fields_def_field_fechaUltimaActualizacion',
          key: 'fechaUltimaActualizacion',
          controlType: 'datepicker',
          disabled: true
        },
        {
          labelKey: 'perfil_cuenta_create_form_fields_def_field_fechaUltimoLogin',
          key: 'fechaUltimoLogin',
          controlType: 'datepicker',
          disabled: true
        },
        {
          labelKey: 'perfil_cuenta_create_form_fields_def_field_solicitudPassword',
          key: 'solicitudesReenviosPassword',
          controlType: 'number',
        },
      ],
      ws: {
        key: 'seccion_grid_def_button_action_cuenta',
        url: PREFIX_DOMAIN_API + 'admin/personas/cuenta',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'seccion_grid_def_button_action_rol',
      actionType: 'redirect',
      redirect: {
        url: '/perfilRol',
        querystring: {
          idUser : 'idUser',
          parentTitle: 'apellido'
        }
      },
      icon: 'supervised_user_circle'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_publicaciones',
      actionType: 'redirect',
      redirect: {
        url: '/perfilPublicaciones',
        querystring: {
          idContact : 'idContact',
          parentTitle: 'apellido'
        }
      },
      icon: 'public'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_newsletter',
      actionType: 'redirect',
      redirect: {
        url: '/perfilNewsletters',
        querystring: {
          idContact : 'idContact',
          parentTitle: 'apellido'
        }
      },
      icon: 'feed'
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_uploadPhoto',
      icon: 'photo',
      form: [
        {
          key: 'foto',
          labelKey: 'foto_contacto',
          label: 'foto_contacto',
          type: 'image_preview_src',
          controlType: 'image_preview_src',
        },
        {               
          key: 'image',
          labelKey: 'Foto (solo jpg)',
          controlType: 'file'
        },
        {               
          key: 'idContact',
          controlType: 'hidden',
        },
      ],
      ws: {
        key: 'perfil_identificacion_grid_def_button_action_subirFoto',
        url: PREFIX_DOMAIN_API + 'admin/saveimage',
        method: 'POST'
      }
    },
    {
      actionNameKey: 'perfil_identificacion_grid_def_button_action_recover_password',
      icon: 'password',      
      confirm: true,
      ws: {
        key: 'perfil_identificacion_grid_def_button_action_recoverPassword',
        url: PREFIX_DOMAIN_API + 'admin/recoverPassword',
        method: 'POST'
      }
    },
  ],
  displayedActionsCondition: [
     {
       key: 'seccion_grid_def_button_action_cuenta',
       expression: {
                     key: 'hasUserId',
                     value: true
                   }
     },
     {
      key: 'seccion_grid_def_button_action_rol',
      expression: {
                    key: 'hasUserId',
                    value: true
                  }
    },
    {
      key: 'perfil_identificacion_grid_def_button_action_cuentacorriente',
      expression: {
                    key: 'isMatriculado',
                    value: true
                  }
    },
    {
      key: 'perfil_identificacion_grid_def_button_action_borrar_contacto',
      expression: {
                    key: 'permiteBorrado',
                    value: true
                  }
    },
    {
      key: 'perfil_identificacion_grid_def_button_action_recover_password',
      expression: {
        key: 'hasUserId',
        value: true
      }
    },
  ]
};

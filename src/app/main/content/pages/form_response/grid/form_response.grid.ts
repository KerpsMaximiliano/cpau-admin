import { PREFIX_DOMAIN_API } from "environments/environment";

export const FORM_RESPONSE_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      columnNameKey: 'form_response_grid_def_column_id',
      id: true
    },
    {
      columnDef: 'status',
      columnNameKey: 'form_response_grid_def_column_status'
    },
    {
      columnDef: 'statusString',
      columnNameKey: 'form_response_grid_def_column_status'
    },
    {
      columnDef: 'date',
      columnNameKey: 'form_response_grid_def_column_date'
    },
    {
      columnDef: 'idForm',
      columnNameKey: 'form_response_grid_def_column_idForm'
    },
    {
      columnDef: 'idContact',
      columnNameKey: 'form_response_grid_def_column_idContact'
    },
    {
      columnDef: 'nombreApellido',
      columnNameKey: 'form_response_grid_def_column_nombreApellido'
    },
    {
      columnDef: 'matricula',
      columnNameKey: 'form_response_grid_def_column_matricula'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'form_response_grid_def_column_tipo'
    },
    {
      columnDef: 'email',
      columnNameKey: 'form_response_grid_def_column_email'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'nombreApellido',
    'email',
    'tipo',
    'matricula',
    'statusString',
    'date'
  ],
  actions: [
    {
      actionNameKey: 'form_response_grid_def_column_button_action_bloqueos_cursos',
      icon: 'free_cancellation',
      form: [
        {
          key: 'bloqueoCursoPrimerSemestre',
          labelKey: 'form_response_label_bloqueo_primer_semestre',
          label: 'Primer Semestre Bloqueado',
          type: 'boolean',
          controlType: 'checkbox',
        },
        {
          key: 'bloqueoCursoSegundoSemestre',
          labelKey: 'form_response_label_bloqueo_segundo_semestre',
          label: 'Segundo Semestre Bloqueado',
          type: 'boolean',
          controlType: 'checkbox',
        },
        {               
          key: 'idContact',
          controlType: 'hidden',
        },
      ],
      ws: {
        key: 'perfil_identificacion_grid_def_button_action_bloqueos_cursos',
        url: PREFIX_DOMAIN_API + 'admin/personas/bloqueocursos',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'form_response_grid_def_column_button_action_confirmar_espera',
      icon: 'fact_check',
      actionSecurity: 'FORMULARIO_CONFIRMAR_ESPERA',
      confirm: true,
      ws: {
        key: 'formulario_grid_def_button_action_despublicar',
        url: PREFIX_DOMAIN_API + 'FormResponse/ConfirmarEspera',
        method: 'GET',
        querystring: {
          idForm : 'id'
        }
      },
    },
  ],
  displayedActionsCondition: [
    {
      key: 'form_response_grid_def_column_button_action_confirmar_espera',
      expression: {
                    key: 'status',
                    value: 'Queued'
                  }
    },
 ]
};

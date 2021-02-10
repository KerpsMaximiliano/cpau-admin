import { PREFIX_DOMAIN_API } from "environments/environment";

export const PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'idContact',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden',
  },
  // {
  //   key: 'tipo',
  //   labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_tipo',
  //   label: 'Tipo',
  //   type: 'string',
  //   controlType: 'textbox'
  // },
  // {
  //   key: 'matricula',
  //   labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_matricula',
  //   label: 'Matricula',
  //   type: 'string',
  //   controlType: 'textbox'
  // },
  // {
  //   key: 'estado',
  //   labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_estado',
  //   label: 'Estado',
  //   type: 'string',
  //   controlType: 'textbox'
  // },
  {
    key: 'nombre',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_nombre',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'apellido',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_apellido',
    label: 'Apellido',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'sexo',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_sexo',
    controlType: 'select',
    required: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 'M', nombre: 'Masculino'},
                 {id: 'F', nombre: 'Femenino'}]
    }
  },
  {
    key: 'idTipoDocumento',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_tipodocumento',
    controlType: 'select',
    options: {
      elementLabel: 'nombre',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'siteConsumer/tipoDocumento',
      }
    }
  },
  {
    key: 'numeroDocumento',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_numerodocumento',
    label: 'Numero Documento',
    type: 'string',
    controlType: 'textbox'
  },
  // {
  //   key: 'usuario',
  //   labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_usuario',
  //   label: 'Usuario',
  //   type: 'string',
  //   controlType: 'textbox'
  // },
  {
    key: 'fechaNacimiento',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_fechanacimiento',
    label: 'Fecha Nacimiento',
    type: 'datepicker',
    controlType: 'datepicker'
  },
  {
    key: 'pais',
    labelKey: 'PERFIL_IDENTIFICACION_UPDATE_FORM_FIELDS_DEF_FIELD_pais',
    controlType: 'select',
    options: {
      elementLabel: 'nombre',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'siteConsumer/pais',
      }
    }
  },
];

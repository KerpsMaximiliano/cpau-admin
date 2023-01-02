import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF = [
  {
    key: 'title',
    labelKey: 'MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF_FIELD_title',
    label: 'Titulo',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'content',
    labelKey: 'MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF_FIELD_content',
    label: 'Contenido',
    type: 'string',
    disabled: true,
    controlType: HTML_EDITOR
  },
  {
    key: 'dateStart',
    labelKey: 'MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF_FIELD_datestart',
    label: 'Fecha Inicio',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  },
  {
    key: 'dateEnd',
    labelKey: 'MODAL_HOME_HISTORY_READ_FORM_FIELDS_DEF_FIELD_dateend',
    label: 'Fecha Fin',
    type: 'string',
    disabled: true,
    controlType: 'textbox'
  }

];

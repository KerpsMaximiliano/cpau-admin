// import { PREFIX_DOMAIN_API } from "environments/environment";

export const MODAL_READ_FORM_FIELDS_DEF = [
    {
        key: 'title',
        labelKey: '',
        label: 'titulo',
        type: 'string',
        controlType: 'textbox',
        maxLength: 200,
        disabled: true,
        required: true
    },
    {
        key: 'content',
        labelKey: '',
        label: 'Contenido',
        type: 'string',
        disabled: true,
        controlType: 'textbox',
        required: true
    }

];

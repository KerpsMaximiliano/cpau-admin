import { ComponentDef } from 'app/modules/fwk/core/model/component-def/component-def';
import { ToolbarComponentDef } from 'app/modules/fwk/core/model/component-def/toolbar-comp-def';
import { environment } from 'environments/environment';
export const TOOLBAR_DEF: ToolbarComponentDef = {
    name: 'toolbar',
    i18n: {
        name: 'toolbar',
        lang: 'es',
        words: {
            menu_text: 'sort',
            menu_user_icon: 'account_circle',
            menu_user_item_1: 'Mis Datos',
            menu_user_item_2: 'Mis Subastas',
            menu_user_item_3: 'Cuenta corriente',
            menu_user_item_4: 'Cambiar contraseña',
            menu_user_item_5: 'Cerrar sesión',
            menu_item_1: 'Inicio',
            menu_item_2: 'Créditos',
            menu_item_3: 'Factoring',
            menu_item_4: 'Seguros',
            menu_item_5: 'Mercado de capitales',
            menu_item_6: 'Nosotros',
            menu_item_7: 'Contacto',
            menu_item_8: 'Preguntas frecuentes',
            menu_item_9: 'Comunicate con nuestro soporte',
            menu_item_10: '0800-123-7654',
            menu_item_11: 'LEGALES',
            menu_item_12: '2018 Esiliva. Todos los derechos reservados.',
        }
    },
    
    contextMenu: [

    ]
};

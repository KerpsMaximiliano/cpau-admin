import { environment } from 'environments/environment';
export const navigation = [
    {
        'id'      : 'administration',
        'title'   : 'Menú General',
        'translate': 'NAV.ADMINISTRATION',
        'type'    : 'group',
        'children': [
           
            {
                'title' : 'Gestión de Contenidos',
                'translate': 'NAV.GESTION_CONTENIDOS',
                'type' : 'collapse',
                'icon' : 'settings',
                'children' : [
                    {
                        'id'   : 'seccion',
                        'title': 'Seccion',
                        'translate': 'NAV.SECCION.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_SECCIONES,
                    },
                    {
                        'id'   : 'contenido',
                        'title': 'Contenido',
                        'translate': 'NAV.CONTENIDO.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_CONTENIDOS,
                    },
                    {
                        'id'   : 'imagen',
                        'title': 'Imagen',
                        'translate': 'NAV.IMAGEN.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_IMAGEN,
                    },
                    {
                        'id'   : 'boletin',
                        'title': 'Boletín',
                        'translate': 'NAV.BOLETIN.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_BOLETIN,
                    },
                    {
                        'id'   : 'indice',
                        'title': 'Indice',
                        'translate': 'NAV.INDICE.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_INDICE,
                    },
                    {
                        'id'   : 'mailing',
                        'title': 'Mailing',
                        'translate': 'NAV.MAILING.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_MAILING,
                    },
                    {
                        'id'   : 'formulario',
                        'title': 'Formularios',
                        'translate': 'NAV.FORMULARIO.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_FORMULARIO,
                    },
                    {
                        'id'   : 'publicidad',
                        'title': 'Publicidades',
                        'translate': 'NAV.PUBLICIDAD.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_PUBLICIDAD,
                    },
                    {
                        'id'   : 'productoExterno',
                        'title': 'Productos Externos',
                        'translate': 'NAV.PRODUCTOEXTERNO.TITLE',
                        'type' : 'item',
                        'url'  : '/' + environment.URL_PRODUCTO_EXTERNO,
                    },
                ]
            },
            
        ]
    }
];

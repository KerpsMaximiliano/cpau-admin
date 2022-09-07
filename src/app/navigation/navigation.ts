import { CONTACT_LIST_DEF } from 'app/main/content/pages/contact_list/contact_list.def';
import { CONTACT_LIST_NAV_DEF } from 'app/main/content/pages/contact_list/navigation/contact_list.nav';
import { CONTACT_LIST_DESUSCRIPTION_NAV_DEF } from 'app/main/content/pages/contact_list_desuscription/navigation/contact_list_desuscription.nav';
import { MATRICULADO_ESTADO_NAV_DEF } from 'app/main/content/pages/matriculado_estado/navigation/matriculado_estado.nav';
import { MATRICULA_TIPO_NAV_DEF } from 'app/main/content/pages/matricula_tipo/navigation/matricula_tipo.nav';
import { AUTORES_DEF } from 'app/main/content/pages/revistanotas/autores/autores.def';
import { AUTORES_NAV_DEF } from 'app/main/content/pages/revistanotas/autores/navigation/autores.nav';
import { CONTENIDOS_NAV_DEF } from 'app/main/content/pages/revistanotas/contenidos/navigation/contenidos.nav';
import { REVISTAS_NAV_DEF } from 'app/main/content/pages/revistanotas/revistas/navigation/revistas.nav';
import { environment } from 'environments/environment';
export const navigation = [
    {
        'id': 'administration',
        'title': 'Menú General',
        'translate': 'NAV.ADMINISTRATION',
        'type': 'group',
        'children': [
            {
                'title': 'Personas',
                'type': 'collapse',
                'icon': 'group',
                'children': [
                    {
                        'title': 'Contactos',
                        'type': 'item',
                        'url': '/' + environment.URL_IDENTIFICACION_BUSQUEDA
                    },
                    {
                        'title': 'Listas de Contactos',
                        'type': 'item',
                        'url': CONTACT_LIST_NAV_DEF.url
                    },  
                    {
                        'id': 'imagen',
                        'title': 'Subir Imágenes',
                        'translate': 'NAV.IMAGEN.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_IMAGEN_SUBIR,
                    },
                    {
                        'id': 'matriculaTipo',
                        'title': 'Tipos de Matrícula',
                        'translate': 'NAV.MATRICULA_TIPO.TITLE',
                        'type': 'item',
                        'url': MATRICULA_TIPO_NAV_DEF.url,
                    },
                    {
                        'id': 'matriculadoEstado',
                        'title': 'Estados de Matrícula',
                        'translate': 'NAV.MATRICULA_ESTADO.TITLE',
                        'type': 'item',
                        'url': MATRICULADO_ESTADO_NAV_DEF.url,

                    }
                ]
            },
            {
                'title': 'Gestión de Contenido',
                'translate': 'NAV.GESTION_CONTENIDOS',
                'type': 'collapse',
                'icon': 'backup_table',
                'children': [
                    {
                        'title': 'Contenidos',
                        'translate': 'NAV.MENU_CONTENIDOS',
                        'type': 'collapse',
                        'icon': 'source',
                        'children': [
                            {
                                'id': 'seccion',
                                'title': 'Secciones',
                                'translate': 'NAV.SECCION.TITLE',
                                'type': 'item',
                                'url': '/' + environment.URL_SECCIONES,
                                'icon': 'dashboard'
                            },
                            {
                                'id': 'contenido',
                                'title': 'Contenidos',
                                'translate': 'NAV.CONTENIDO.TITLE',
                                'type': 'item',
                                'icon': 'library_books',
                                'url': '/' + environment.URL_CONTENIDOS
                            },
                            {
                                'id': 'imagen',
                                'title': 'Imágenes',
                                'translate': 'NAV.IMAGEN.TITLE',
                                'type': 'item',
                                'icon': 'photo_library',
                                'url': '/' + environment.URL_IMAGEN,
                            },
                            {
                                'id': 'productoExterno',
                                'title': 'Productos',
                                'translate': 'NAV.PRODUCTOEXTERNO.TITLE',
                                'type': 'item',
                                'icon': 'extension',
                                'url': '/' + environment.URL_PRODUCTO_EXTERNO,
                            },
                            {
                                'id': 'noticiaCarrousel',
                                'title': 'Notas Carrousel',
                                'translate': 'NAV.NOTASCARROUSEL.TITLE',
                                'type': 'item',
                                'icon': 'burst_mode',
                                'url': '/' + environment.URL_NOTICIA_CARROUSEL,
                            },
                        ]
                    },
                    {
                        'title': 'Newsletter',
                        'translate': 'NAV.MENU_BOLETINES',
                        'type': 'collapse',
                        'icon': 'newspaper',
                        'children': [
                            {
                                'id': 'boletin',
                                'title': 'Boletínes',
                                'translate': 'NAV.BOLETIN.TITLE',
                                'type': 'item',
                                'url': '/' + environment.URL_BOLETIN,
                            },
                            {
                                'id': 'indice',
                                'title': 'Índices',
                                'translate': 'NAV.INDICE.TITLE',
                                'type': 'item',
                                'url': '/' + environment.URL_INDICE,
                            },
                            {
                                'id': 'mailing',
                                'title': 'Mailing',
                                'translate': 'NAV.MAILING.TITLE',
                                'type': 'item',
                                'url': '/' + environment.URL_MAILING,
                            },
                        ]
                    },
                ],
            },
            {
                'title': 'Herramientas',
                'translate': 'NAV.MENU_HERRAMIENTAS',
                'type': 'collapse',
                'icon': 'construction',
                'children': [
                    {
                        'id': 'formulario',
                        'title': 'Formularios',
                        'translate': 'NAV.FORMULARIO.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_FORMULARIO,
                    },
                    {
                        'id': 'publicidad',
                        'title': 'Publicidades',
                        'translate': 'NAV.PUBLICIDAD.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_PUBLICIDAD,
                    }
                    
                ]
            },
            {
                'title': 'Revistas Notas',
                'translate': 'NAV.MENU_REVISTAS_NOTAS',
                'type': 'collapse',
                'icon': 'menu_book',
                'children': [
                    {
                        'id': 'autores',
                        'title': 'Autores',
                        'translate': 'NAV.AUTORES.TITLE',
                        'type': 'item',
                        'url': AUTORES_NAV_DEF.url,
                    },
                    {
                        'id': 'contenidos',
                        'title': 'Contenidos',
                        'translate': 'NAV.CONTENIDOS.TITLE',
                        'type': 'item',
                        'url': CONTENIDOS_NAV_DEF.url,
                    },
                    {
                        'id': 'revistas',
                        'title': 'Revistas',
                        'translate': 'NAV.REVISTAS.TITLE',
                        'type': 'item',
                        'url': REVISTAS_NAV_DEF.url,
                    }                        
                ]
            },
            {
                'title': 'Sistema',
                'translate': 'NAV.MENU_SISTEMA',
                'type': 'collapse',
                'icon': 'settings',
                'children': [
                    {
                        'id': 'abmModal',
                        'title': 'Modal Home',
                        'translate': 'NAV.ABMMODAL.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_ABM_MODAL,
                    },
                    {
                        'id': 'messageTemplate',
                        'title': 'Plantillas de Mensajes',
                        'translate': 'NAV.MESSAGETEMPLATE.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_MESSAGE_TEMPLATE,
                    },
                    {
                        'id': 'emailAccount',
                        'title': 'Cuentas de Correo',
                        'translate': 'NAV.EMAILACCOUNT.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_EMAIL_ACCOUNT,
                    },
                    {
                        'id': 'abmRoles',
                        'title': 'Roles',
                        'translate': 'NAV.ABMROLES.TITLE',
                        'type': 'item',
                        'url': '/' + environment.URL_ABM_ROLES,
                    }
                ]
            }


        ]
    }
];

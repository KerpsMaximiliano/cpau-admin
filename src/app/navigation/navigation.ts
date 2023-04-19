import { CATEGORIA_DEF } from 'app/main/content/pages/categoria/categoria.def';
import { CONTACT_LIST_NAV_DEF } from 'app/main/content/pages/contact_list/navigation/contact_list.nav';
import { MATRICULADO_ESTADO_NAV_DEF } from 'app/main/content/pages/matriculado_estado/navigation/matriculado_estado.nav';
import { MATRICULA_TIPO_NAV_DEF } from 'app/main/content/pages/matricula_tipo/navigation/matricula_tipo.nav';
import { PERMISO_DEF } from 'app/main/content/pages/permiso/permiso.def';
import { PRODUCTO_DEF } from 'app/main/content/pages/producto/producto.def';
import { AUTORES_NAV_DEF } from 'app/main/content/pages/revistanotas/autores/navigation/autores.nav';
import { CONTENIDOS_NAV_DEF } from 'app/main/content/pages/revistanotas/contenidos/navigation/contenidos.nav';
import { REVISTAS_NAV_DEF } from 'app/main/content/pages/revistanotas/revistas/navigation/revistas.nav';
import { SEGURIDAD_GRUPO_DEF } from 'app/main/content/pages/seguridad_grupo/seguridad_grupo.def';
import { USER_ADMIN_DEF } from 'app/main/content/pages/user_admin/user_admin.def';
import { VENTA_DEF } from 'app/main/content/pages/venta/venta.def';
import { environment } from 'environments/environment';
import { TEMPLATE_CONTENIDO_NAV_DEF } from 'app/main/content/pages/template_contenido/navigation/template_contenido.nav';
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
                'permission': 'MENU_PERSONAS',
                'children': [
                    {
                        'title': 'Contactos',
                        'type': 'item',
                        'url': environment.URL_IDENTIFICACION_BUSQUEDA,
                        'permission': 'IDENTIFICACION_BUSQUEDA_READ',
                    },
                    {
                        'title': 'Listas de Contactos',
                        'type': 'item',
                        'url': CONTACT_LIST_NAV_DEF.url,
                        'permission': 'CONTACT_LIST_READ',
                    },  
                    {
                        'id': 'imagen',
                        'title': 'Subir Imágenes',
                        'translate': 'NAV.IMAGEN.TITLE',
                        'type': 'item',
                        'url': environment.URL_IMAGEN_SUBIR,
                        'permission': 'PERFIL_MATRICULADO_UPLOAD_READ',
                    },
                    {
                        'id': 'matriculaTipo',
                        'title': 'Tipos de Matrícula',
                        'translate': 'NAV.MATRICULA_TIPO.TITLE',
                        'type': 'item',
                        'url': MATRICULA_TIPO_NAV_DEF.url,
                        'permission': 'MATRICULA_TIPO_READ',
                    },
                    {
                        'id': 'matriculadoEstado',
                        'title': 'Estados de Matrícula',
                        'translate': 'NAV.MATRICULA_ESTADO.TITLE',
                        'type': 'item',
                        'url': MATRICULADO_ESTADO_NAV_DEF.url,
                        'permission': 'MATRICULADO_ESTADO_READ',

                    }
                ]
            },
            {
                'title': 'Gestión de Contenido',
                'translate': 'NAV.GESTION_CONTENIDOS',
                'type': 'collapse',
                'icon': 'backup_table',
                'permission': 'MENU_GESTION_CONTENIDOS',
                'children': [
                    {
                        'title': 'Contenidos',
                        'translate': 'NAV.MENU_CONTENIDOS',
                        'type': 'collapse',
                        'icon': 'source',
                        'permission': 'SUBMENU_CONTENIDOS',
                        'children': [
                            {
                                'id': 'seccion',
                                'title': 'Secciones',
                                'translate': 'NAV.SECCION.TITLE',
                                'type': 'item',
                                'url': environment.URL_SECCIONES,
                                'icon': 'dashboard',
                                'permission': 'SECCION_READ',
                            },
                            {
                                'id': 'contenido',
                                'title': 'Contenidos',
                                'translate': 'NAV.CONTENIDO.TITLE',
                                'type': 'item',
                                'icon': 'library_books',
                                'url': environment.URL_CONTENIDOS,
                                'permission': 'CONTENIDO_READ',
                            },
                            {
                                'id': 'templateContenido',
                                'title': 'Templates',
                                // 'translate': 'NAV.CONTENIDO.TITLE',
                                'type': 'item',
                                'icon': 'library_books',
                                'url': TEMPLATE_CONTENIDO_NAV_DEF.url,
                                'permission': 'TEMPLATE_CONTENIDO_READ',
                            },
                            {
                                'id': 'imagen',
                                'title': 'Imágenes',
                                'translate': 'NAV.IMAGEN.TITLE',
                                'type': 'item',
                                'icon': 'photo_library',
                                'url': environment.URL_IMAGEN,
                                'permission': 'IMAGEN_READ'
                            },
                            {
                                'id': 'productoExterno',
                                'title': 'Productos',
                                'translate': 'NAV.PRODUCTOEXTERNO.TITLE',
                                'type': 'item',
                                'icon': 'extension',
                                'url': environment.URL_PRODUCTO_EXTERNO,
                                'permission': 'PRODUCTO_EXTERNO_READ'
                            },
                            {
                                'id': 'noticiaCarrousel',
                                'title': 'Notas Carrousel',
                                'translate': 'NAV.NOTASCARROUSEL.TITLE',
                                'type': 'item',
                                'icon': 'burst_mode',
                                'url': environment.URL_NOTICIA_CARROUSEL,
                                'permission': 'NOTICIA_CARROUSEL_READ'
                            },
                        ]
                    },
                    {
                        'title': 'Newsletter',
                        'translate': 'NAV.MENU_BOLETINES',
                        'type': 'collapse',
                        'icon': 'newspaper',
                        'permission': 'MENU_NEWSLETTER',
                        'children': [
                            {
                                'id': 'boletin',
                                'title': 'Boletínes',
                                'translate': 'NAV.BOLETIN.TITLE',
                                'type': 'item',
                                'url': environment.URL_BOLETIN,
                                'permission': 'BOLETIN_READ'
                            },
                            {
                                'id': 'indice',
                                'title': 'Índices',
                                'translate': 'NAV.INDICE.TITLE',
                                'type': 'item',
                                'url': environment.URL_INDICE,
                                'permission': 'INDICE_READ'
                            },
                            {
                                'id': 'mailing',
                                'title': 'Mailing',
                                'translate': 'NAV.MAILING.TITLE',
                                'type': 'item',
                                'url': environment.URL_MAILING,
                                'permission': 'MAILING_READ'
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
                'permission': 'MENU_HERRAMIENTAS',
                'children': [
                    {
                        'id': 'formulario',
                        'title': 'Formularios',
                        'translate': 'NAV.FORMULARIO.TITLE',
                        'type': 'item',
                        'url': environment.URL_FORMULARIO,
                        'permission': 'FORMULARIO_READ'
                    },
                    {
                        'id': 'publicidad',
                        'title': 'Publicidades',
                        'translate': 'NAV.PUBLICIDAD.TITLE',
                        'type': 'item',
                        'url': environment.URL_PUBLICIDAD,
                        'permission': 'BANNER_READ'
                    }
                    
                ]
            },
            {
                'title': 'Revistas Notas',
                'translate': 'NAV.MENU_REVISTAS_NOTAS',
                'type': 'collapse',
                'icon': 'menu_book',
                'permission': 'MENU_REVISTAS_NOTAS',
                'children': [
                    {
                        'id': 'autores',
                        'title': 'Autores',
                        'translate': 'NAV.AUTORES.TITLE',
                        'type': 'item',
                        'url': AUTORES_NAV_DEF.url,
                        'permission': 'AUTORES_READ'
                    },
                    {
                        'id': 'contenidos',
                        'title': 'Contenidos',
                        'translate': 'NAV.CONTENIDOS.TITLE',
                        'type': 'item',
                        'url': CONTENIDOS_NAV_DEF.url,
                        'permission': 'RN_CONTENIDOS_READ'
                    },
                    {
                        'id': 'revistas',
                        'title': 'Revistas',
                        'translate': 'NAV.REVISTAS.TITLE',
                        'type': 'item',
                        'url': REVISTAS_NAV_DEF.url,
                        'permission': 'RN_REVISTAS_READ'
                    }                        
                ]
            },
            {
                'title': 'Sistema',
                'translate': 'NAV.MENU_SISTEMA',
                'type': 'collapse',
                'icon': 'settings',
                'permission': 'MENU_SISTEMA',
                'children': [
                    {
                        'id': 'abmModal',
                        'title': 'Modal Home',
                        'translate': 'NAV.ABMMODAL.TITLE',
                        'type': 'item',
                        'url': environment.URL_ABM_MODAL,
                        'permission': 'MODAL_READ'
                    },
                    {
                        'id': 'messageTemplate',
                        'title': 'Plantillas de Mensajes',
                        'translate': 'NAV.MESSAGETEMPLATE.TITLE',
                        'type': 'item',
                        'url': environment.URL_MESSAGE_TEMPLATE,
                        'permission': 'MESSAGE_TEMPLATE_READ'
                    },
                    {
                        'id': 'emailAccount',
                        'title': 'Cuentas de Correo',
                        'translate': 'NAV.EMAILACCOUNT.TITLE',
                        'type': 'item',
                        'url': environment.URL_EMAIL_ACCOUNT,
                        'permission': 'EMAIL_ACCOUNT_READ'
                    },
                    {
                        'id': 'abmRoles',
                        'title': 'Roles',
                        'translate': 'NAV.ABMROLES.TITLE',
                        'type': 'item',
                        'url': environment.URL_ABM_ROLES,
                        'permission': 'ABM_ROLES_READ'
                    }
                ]
            },
            {
                'title': 'Ventas',
                'translate': 'NAV.MENU_VENTAS',
                'type': 'collapse',
                'icon': 'storefront',
                'permission': 'MENU_VENTAS',
                'children': [
                    {
                        'id': 'producto',
                        'title': 'Productos',
                        'translate': 'NAV.PRODUCTOS.TITLE',
                        'icon': 'inventory_2',
                        'type': 'item',
                        'url': PRODUCTO_DEF.navigation.url,
                        'permission': 'PRODUCTO_READ'
                    },
                    {
                        'id': 'categoria',
                        'title': 'Categorias',
                        'translate': 'NAV.CATEGORIAS.TITLE',
                        'icon': 'category',
                        'type': 'item',
                        'url': CATEGORIA_DEF.navigation.url,
                        'permission': 'CATEGORIA_READ'
                    },
                    {
                        'id': 'ventas',
                        'title': 'Operaciones',
                        'translate': 'NAV.OPERACIONES.TITLE',
                        'icon': 'point_of_sale',
                        'type': 'item',
                        'url': VENTA_DEF.navigation.url,
                        'permission': 'VENTA_READ'
                    }
                ]
            },
            {
                'title': 'Seguridad',
                'translate': 'NAV.MENU_SEGURIDAD.TITLE',
                'type': 'collapse',
                'icon': 'security',
                'permission': 'MENU_SEGURIDAD',
                'children': [
                    {
                        'id': 'usuarios',
                        'title': 'Usuarios',
                        'translate': 'NAV.MENU_USUARIOS.TITLE',
                        'icon': 'manage_accounts',
                        'type': 'item',
                        'url': USER_ADMIN_DEF.navigation.url,
                        'permission': 'USER_ADMIN_READ'
                    },
                    {
                        'id': 'grupos',
                        'title': 'Grupos',
                        'translate': 'NAV.MENU_GRUPOS.TITLE',
                        'icon': 'group_work',
                        'type': 'item',
                        'url': SEGURIDAD_GRUPO_DEF.navigation.url,
                        'permission': 'SEGURIDAD_GRUPO_READ'
                    },
                    {
                        'id': 'permisos',
                        'title': 'Permisos',
                        'translate': 'NAV.MENU_PERMISOS.TITLE',
                        'icon': 'lock',
                        'type': 'item',
                        'url': PERMISO_DEF.navigation.url,
                        'permission': 'PERMISO_READ'
                    }
                ]
            },


        ]
    }
];

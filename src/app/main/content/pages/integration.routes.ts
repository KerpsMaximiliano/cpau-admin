import { Routes } from '@angular/router';
import { AuthGuardService } from '../../../modules/fwk/core/service/security/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IMAGEN_DEF } from '../pages/imagen/imagen.def';
import { SECCION_DEF } from './seccion/seccion.def';
import { SECTION_CONTENT_DEF } from './section_content/section_content.def';
import { SECTION_TOPIC_DEF } from './section_topic/section_topic.def';
import { BANNER_CAMPAING_DEF } from './banner_campaing/banner_campaing.def';
import { BANNER_DEF } from './banner/banner.def';
import { BOLETIN_DEF } from './boletin/boletin.def';
import { FORMULARIO_DEF } from './formulario/formulario.def';
import { CAMPO_DEF } from './campo/campo.def';
import { OPCION_DEF } from './opcion/opcion.def';
import { BOLETIN_CONTENIDO_DEF } from './boletin_contenido/boletin_contenido.def';
import { INDICE_DEF } from './indice/indice.def';
import { CONTENIDO_DEF } from './contenido/contenido.def';
import { PRODUCTO_EXTERNO_DEF } from './producto_externo/producto_externo.def';
import { CONTENT_IMAGE_DEF } from './content_image/content_image.def';
import { TAG_SELECTION_DEF } from './tag_selection/tag_selection.def';
import { MAILING_DEF } from './mailing/mailing.def';
import { FORM_RESPONSE_DEF } from './form_response/form_response.def';
import { IntegrationComponent } from '../integration/integration.component';
import { MODAL_DEF } from './modal/modal.def';
import { PERFIL_IDENTIFICACION_DEF } from './perfil_identificacion/perfil_identificacion.def';
import { PERFIL_DOMICILIO_DEF } from './perfil_domicilio/perfil_domicilio.def';
import { PERFIL_EMAIL_DEF } from './perfil_email/perfil_email.def';
import { PERFIL_TELEFONO_DEF } from './perfil_telefono/perfil_telefono.def';
import { PERFIL_REDES_SOCIALES_DEF } from './perfil_redes_sociales/perfil_redes_sociales.def';
import { PERFIL_CUENTA_CORRIENTE_DEF } from './perfil_cuenta_corriente/perfil_cuenta_corriente.def';
import { PERFIL_PUBLICACIONES_DEF } from './perfil_publicaciones/perfil_publicaciones.def';
import { PERFIL_NEWSLETTERS_DEF } from './perfil_newsletters/perfil_newsletters.def';
import { PERFIL_ROL_DEF } from './perfil_rol/perfil_rol.def';
import { IDENTIFICACION_BUSQUEDA_DEF } from './identificacion_busqueda/identificacion_busqueda.def';
import { MESSAGE_TEMPLATE_DEF } from './message_template/message_template.def';
import { PERFIL_MATRICULADO_UPLOAD_DEF } from './perfil_matriculado_upload/perfil_matriculado_upload.def';
import { UploadComponent } from '../upload/upload.component';
import { EMAIL_ACCOUNT_DEF } from './email_account/email_account.def';
import { ABM_ROLES_DEF } from './abm_roles/abm_roles.def';
import { MATRICULA_TIPO_DEF } from './matricula_tipo/matricula_tipo.def';
import { CONTACT_LIST_DEF } from './contact_list/contact_list.def';
import { CONTACT_LIST_DESUSCRIPTION_DEF } from './contact_list_desuscription/contact_list_desuscription.def';
import { CONTACT_LIST_MEMBERS_DEF } from './contact_list_members/contact_list_members.def';
import { NOTICIA_CARROUSEL_DEF } from './noticiaCarrousel/noticiaCarrousel.def';
import { MATRICULADO_ESTADO_DEF } from './matriculado_estado/matriculado_estado.def';
import { CERTIFICADO_MATRICULADO_DEF } from './certificado_matriculado/certificado_matriculado.def';
import { AUTORES_DEF } from './revistanotas/autores/autores.def';
import { CONTENIDO_AUTORES_DEF } from './revistanotas/contenido_autores/contenido_autores.def';
import { CONTENIDO_TAGS_DEF } from './revistanotas/contenido_tags/contenido_tags.def';
import { CONTENIDOS_DEF } from './revistanotas/contenidos/contenidos.def';
import { REVISTA_CONTENIDOS_DEF } from './revistanotas/revista_contenidos/revista_contenidos.def';
import { REVISTAS_DEF } from './revistanotas/revistas/revistas.def';
import { TAGS_DEF } from './revistanotas/tags/tags.def';
import { SECCIONES_CONTENIDO_DEF } from './secciones_contenido/secciones_contenido.def';
import { CATEGORIA_DEF } from './categoria/categoria.def';
import { PRODUCTO_DEF } from './producto/producto.def';
import { VENTA_ENVIO_DEF } from './venta_envio/venta_envio.def';
import { VENTA_PRODUCTO_DEF } from './venta_producto/venta_producto.def';
import { VENTA_TRAMITE_DEF } from './venta_tramite/venta_tramite.def';
import { VENTA_DERECHO_ANUAL_DEF } from './venta_derecho_anual/venta_derecho_anual.def';
import { DETALLE_ENVIO_DEF } from './detalle_envio/detalle_envio.def';
import { VENTA_DEF } from './venta/venta.def';
import { CONTENIDO_HISTORY_DEF } from './contenidoHistory/contenidoHistory.def';
import { CONTENIDOS_HISTORY_DEF } from './revistanotas/contenidos_history/contenidos_history.def';
import { SECCIONES_HISTORY_DEF } from './secciones_history/secciones_history.def';
import { PRODUCTO_EXTERNO_HISTORY_DEF } from './producto_externo_history/producto_externo_history.def';
export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: IMAGEN_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: SECCION_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: SECTION_CONTENT_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: SECTION_TOPIC_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: BANNER_CAMPAING_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: BANNER_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: BOLETIN_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: FORMULARIO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CAMPO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: OPCION_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: BOLETIN_CONTENIDO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: INDICE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CERTIFICADO_MATRICULADO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PRODUCTO_EXTERNO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: MATRICULADO_ESTADO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: AUTORES_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: NOTICIA_CARROUSEL_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTENIDO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTENT_IMAGE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: TAG_SELECTION_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: MAILING_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: FORM_RESPONSE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: MODAL_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_IDENTIFICACION_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_DOMICILIO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_EMAIL_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_TELEFONO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_REDES_SOCIALES_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_CUENTA_CORRIENTE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_PUBLICACIONES_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_NEWSLETTERS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_ROL_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: IDENTIFICACION_BUSQUEDA_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: MESSAGE_TEMPLATE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PERFIL_MATRICULADO_UPLOAD_DEF.navigation.url.split('/')[1],
    component: UploadComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: EMAIL_ACCOUNT_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: MATRICULA_TIPO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ABM_ROLES_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTACT_LIST_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTACT_LIST_DESUSCRIPTION_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTACT_LIST_MEMBERS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTENIDO_AUTORES_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTENIDO_TAGS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: CONTENIDOS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: REVISTA_CONTENIDOS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: REVISTAS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: TAGS_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: SECCIONES_CONTENIDO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
{
    path: CATEGORIA_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: PRODUCTO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: VENTA_ENVIO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: VENTA_PRODUCTO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: VENTA_TRAMITE_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: VENTA_DERECHO_ANUAL_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: DETALLE_ENVIO_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: VENTA_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]  
  },
  {
    path: CONTENIDO_HISTORY_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]  
  },
  {
    path: CONTENIDOS_HISTORY_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]  
  },
  {
    path: SECCIONES_HISTORY_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]  
  },
  {
    path: PRODUCTO_EXTERNO_HISTORY_DEF.navigation.url.split('/')[1],
    component: IntegrationComponent,
    canActivate: [AuthGuardService]  
  }

];



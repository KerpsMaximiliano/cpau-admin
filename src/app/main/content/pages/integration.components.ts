
import { ComponentDef } from '../../../modules/fwk/core/model/component-def/component-def';
import { IMAGEN_DEF } from './imagen/imagen.def';
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
import { TAGS } from 'app/modules/fwk/core/model/dynamic-form/dynamic-field';
import { TAGS_DEF } from './revistanotas/tags/tags.def';
import { SECCIONES_CONTENIDO_DEF } from './secciones_contenido/secciones_contenido.def';
import { CATEGORIA_DEF } from './categoria/categoria.def';
import { PRODUCTO_DEF } from './producto/producto.def';
import { VENTA_DEF } from './venta/venta.def';
import { DETALLE_ENVIO_DEF } from './detalle_envio/detalle_envio.def';
import { VENTA_DERECHO_ANUAL_DEF } from './venta_derecho_anual/venta_derecho_anual.def';
import { VENTA_PRODUCTO_DEF } from './venta_producto/venta_producto.def';
import { VENTA_TRAMITE_DEF } from './venta_tramite/venta_tramite.def';
import { VENTA_ENVIO_DEF } from './venta_envio/venta_envio.def';

export const COMPONENTS: ComponentDef[] = [
  IMAGEN_DEF,
  SECCION_DEF,
  SECTION_CONTENT_DEF,
  SECTION_TOPIC_DEF,
  BANNER_CAMPAING_DEF,
  BANNER_DEF,
  BOLETIN_DEF,
  FORMULARIO_DEF,
  CAMPO_DEF,
  OPCION_DEF,
  BOLETIN_CONTENIDO_DEF,
  INDICE_DEF,
  CONTENIDO_DEF,
  PRODUCTO_EXTERNO_DEF,
  NOTICIA_CARROUSEL_DEF,
  CONTENT_IMAGE_DEF,
  TAG_SELECTION_DEF,
  MAILING_DEF,
  FORM_RESPONSE_DEF,
  MODAL_DEF,
  PERFIL_IDENTIFICACION_DEF,
  PERFIL_DOMICILIO_DEF,
  PERFIL_EMAIL_DEF,
  PERFIL_TELEFONO_DEF,
  PERFIL_REDES_SOCIALES_DEF,
  PERFIL_CUENTA_CORRIENTE_DEF,
  PERFIL_PUBLICACIONES_DEF,
  PERFIL_NEWSLETTERS_DEF,
  PERFIL_ROL_DEF,
  IDENTIFICACION_BUSQUEDA_DEF,
  MESSAGE_TEMPLATE_DEF,
  EMAIL_ACCOUNT_DEF,
  PERFIL_MATRICULADO_UPLOAD_DEF,
  ABM_ROLES_DEF,
  MATRICULA_TIPO_DEF,
  CONTACT_LIST_DEF,
  CONTACT_LIST_DESUSCRIPTION_DEF,
  CONTACT_LIST_MEMBERS_DEF,
  MATRICULADO_ESTADO_DEF,
  CERTIFICADO_MATRICULADO_DEF,
  AUTORES_DEF,
  CONTENIDO_AUTORES_DEF,
  CONTENIDO_TAGS_DEF,
  CONTENIDOS_DEF,
  REVISTA_CONTENIDOS_DEF,
  TAGS_DEF,
  SECCIONES_CONTENIDO_DEF,
  CATEGORIA_DEF,
  PRODUCTO_DEF,
  VENTA_DEF,
  DETALLE_ENVIO_DEF,
  VENTA_DERECHO_ANUAL_DEF,
  VENTA_PRODUCTO_DEF,
  VENTA_TRAMITE_DEF,
  VENTA_ENVIO_DEF];


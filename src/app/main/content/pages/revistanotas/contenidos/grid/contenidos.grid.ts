import { HTML_EDITOR, TEXTAREA } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { PREFIX_DOMAIN_API } from "environments/environment";
import { CONTENIDOS_HISTORY_DEF } from "../../contenidos_history/contenidos_history.def";
import { CONTENIDOS_HISTORY_NAV_DEF } from "../../contenidos_history/navigation/contenidos_history.nav";

export const CONTENIDOS_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      key: true,
      columnNameKey: 'contenidos_grid_def_column_id'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'contenidos_grid_def_column_titulo'
    },
    {
      columnDef: 'tituloSe',
      columnNameKey: 'contenidos_grid_def_column_titulose'
    },
    {
      columnDef: 'texto',
      columnNameKey: 'contenidos_grid_def_column_texto'
    },
    {
      columnDef: 'url',
      columnNameKey: 'contenidos_grid_def_column_url'
    },
    {
      columnDef: 'esNota',
      columnNameKey: 'contenidos_grid_def_column_esNota'
    },
    {
      columnDef: 'urlTarget',
      columnNameKey: 'contenidos_grid_def_column_urltarget'
    },
    {
      columnDef: 'tipo',
      columnNameKey: 'contenidos_grid_def_column_tipo'
    },
    {
      columnDef: 'tipoString',
      columnNameKey: 'contenidos_grid_def_column_tipo'
    },
    {
      columnDef: 'imagen',
      columnNameKey: 'contenidos_grid_def_column_imagen'
    },
    {
      columnDef: 'imagenes',
      columnNameKey: 'contenidos_grid_def_column_imagenes'
    }
    ,
    {
      columnDef: 'usuarioAlta',
      columnNameKey: 'contenidos_grid_def_column_usuarioAlta'
    },
    {
      columnDef: 'usuarioUltimaModificacion',
      columnNameKey: 'contenidos_grid_def_column_usuarioUltimaModificacion'
    },
    {
      columnDef: 'fechaAltaString',
      columnNameKey: 'contenidos_grid_def_column_fechaAltaString'
    },
    {
      columnDef: 'fechaUltimaModificacionString',
      columnNameKey: 'contenidos_grid_def_column_fechaUltimaModificacionString'
    }
  ],
  sortAllColumns: true,
  groupActions: true,
  displayedColumns: [
    'titulo',
    'tipoString',
    'usuarioAlta','fechaAltaString','usuarioUltimaModificacion','fechaUltimaModificacionString'
  ],
  deleteAction: true,
  actions: [
    {
      actionNameKey: 'contenidos_grid_def_column_texto',
      icon: 'description',
      actionSecurity: 'RN_CONTENIDOS_UPDATE_TEXTO',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'texto',
            labelKey: 'contenidos_grid_def_column_texto',
            label: 'Texto',
            controlType: HTML_EDITOR
          }
        ]
      },
      ws: {
        key: 'contenidos_grid_def_column_texto',
        url: PREFIX_DOMAIN_API + 'Contenidos/UpdateTexto',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'contenidos_grid_def_column_texto_text',
      icon: 'note',
      actionSecurity: 'RN_CONTENIDOS_UPDATE_TEXTO',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'texto',
            labelKey: 'contenidos_grid_def_column_texto',
            label: 'Texto',
            controlType: TEXTAREA
          }
        ]
      },
      ws: {
        key: 'contenidos_grid_def_column_texto',
        url: PREFIX_DOMAIN_API + 'Contenidos/UpdateTexto',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'contenidos_create_form_fields_def_field_tags',
      actionType: 'redirect',
      actionSecurity: 'TAGS_READ',
      redirect: {
        url: '/ContenidoTags',
        querystring: {
          contenidoId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'style'
    },
    {
      actionNameKey: 'contenidos_create_form_fields_def_field_autores',
      actionType: 'redirect',
      actionSecurity: 'CONTENIDO_AUTORES_READ',
      redirect: {
        url: '/ContenidoAutores',
        querystring: {
          contenidoId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'people'
    },
    {
      actionNameKey: 'Versiones Anteriores',
      actionType: 'redirect',
      actionSecurity: 'RN_CONTENIDOS_HISTORY_READ',
      redirect: {
        url: CONTENIDOS_HISTORY_NAV_DEF.url,
        querystring: {
          contenidosId : 'id',
          parentTitle: 'titulo'
        }
      },
      icon: 'manage_history'
    },
  ]
};

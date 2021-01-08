// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// export const PREFIX_DOMAIN_API =  'http://localhost:5000/api/';
export const PREFIX_DOMAIN_API =  'https://cpauorgapi-test.azurewebsites.net/api/';
export const PREFIX_INSTITUCIONAL = '/Content/institucional';
export const PREFIX_OLDSITE = '';


export const environment = {
    localAuth: false,
    
    production: true,
    hmr       : false,
    // pasar a true para evitar ws
    /** URLs of Services **/

    /** AUTHENTICATION */
    AUTHENTICATION_URL:  PREFIX_DOMAIN_API + 'Auth',
    AUTHENTICATION_REFRESH_TOKEN_URL:  PREFIX_DOMAIN_API + 'Auth/refresh',

    /* Config General URl*/
    URL_ROOT: '',
    URL_LOGIN: PREFIX_INSTITUCIONAL,
    // Business
    URL_PREGUNTA_PERFIL: 'preguntaPerfil',
    URL_LIMITES_INVERSIONISTA: 'limitesInversionista',
    URL_SCORING_SOLICITANTE: 'scoringSolicitante',
    URL_LISTADO_CLIENTE: 'clienteListado',
    URL_CLIENTE_DETAIL: 'client/detail/:id',
    CLIENT_DETAIL_URL: 'clientform/detail/',
    URL_REGISTRO_CLIENTE: 'registro/cliente',
    URL_ACREDITACION: 'acreditacion',
    URL_LOAN_CLIENT_REQUEST: 'solicitudPrestamo',
    URL_LOAN_CLIENT_AUCTION: 'subastaPrestamo',
    URL_LOAN_CLIENT: 'prestamo',

    /* NEW IMPLEMENTATION */
    NAVIGATION_URLS: [
        {
            key: 'faq',
            url: 'faq'
        }
    ],
    
    /*NEW IMPLEMENTATION */
    WS_URLS: [
        // {
        //     key: 'CRUD_FAQ_URL',
        //     url: PREFIX_DOMAIN_API + 'ws-rest-parameter/faqs/'
        // }
    ],

    AUTOCOMPLETE_WAITING_TIME: 700
};


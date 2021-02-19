import { ComponentDef } from './component-def';
import { FormsCrudDef } from './form-crud-def';
import { GridDef } from './grid-def';
import { ActionDef } from './action-def';
import { DisplayActionsCondition } from '../display-actions-condition';

export class CrudDef extends ComponentDef {
    grid?: GridDef;
    /* 
      Estructura deprecada usar formsDef -> forms esta solo disponible para el componente visual crud
    */
    backButton?: boolean;
    forms?: FormsCrudDef;
    forceGetDetail?: boolean;
    crudActions?: ActionDef [];
    displayGlobalActions?: DisplayActionsCondition [];
    filterInMemory?: boolean;
    serverPagination?: boolean;
    pagination?: {
      page: number,
      pageSize: number 
    };
    initFilter?: boolean;
    openLink?: string;
    openLinkTitle?: string;
    exportCsv?: {
      csvExportFileName: string
    };
    cancelInitSearch?: boolean;
    // Deprecado
    searchFields?: any;
}

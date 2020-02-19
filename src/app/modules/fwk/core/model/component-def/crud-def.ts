import { Entity } from '../entity';
import { WsDef } from '../ws-def';
import { ComponentDef } from './component-def';
import { FormsCrudDef } from './form-crud-def';
import { GridDef } from './grid-def';
import { FormDef } from '../form-def';
import { FormsDef } from './form-def';
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
    initFilter?: boolean;
    exportCsv?: {
      csvExportFileName: string
    };
    // Deprecado
    form?: any;
    searchFields?: any;
    tableDef?: any;
}

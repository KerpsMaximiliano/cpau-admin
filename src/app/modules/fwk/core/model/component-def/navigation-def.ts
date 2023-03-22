import { WsDef } from '../ws-def';

export class NavigationDef {
    // Obligatorios
    id: string;
    translateKey: string;
    url: string;
    title?: string;

    // Opcionales
    permission?: string;
    translate?: string;
    showMenu?: boolean;
}

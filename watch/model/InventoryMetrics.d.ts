import IModel from '../../core/interface/IModel';
import InventoryNamespace from './InventoryNamespace';
export default class InventoryMetrics implements IModel {
    private namespaces;
    getNamespaces(): InventoryNamespace[] | null;
    setNamespaces(namespaces: InventoryNamespace[] | null): this;
    withNamespaces(namespaces: InventoryNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}

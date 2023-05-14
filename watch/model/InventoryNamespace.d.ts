import IModel from '../../core/interface/IModel';
import InventoryInventory from './InventoryInventory';
export default class InventoryNamespace implements IModel {
    private namespaceName;
    private inventory;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getInventory(): InventoryInventory[] | null;
    setInventory(inventory: InventoryInventory[] | null): this;
    withInventory(inventory: InventoryInventory[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}

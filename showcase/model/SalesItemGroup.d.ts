import IModel from '../../core/interface/IModel';
import SalesItem from './SalesItem';
export default class SalesItemGroup implements IModel {
    private name;
    private metadata;
    private salesItems;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSalesItems(): SalesItem[] | null;
    setSalesItems(salesItems: SalesItem[] | null): this;
    withSalesItems(salesItems: SalesItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SalesItemGroup | null;
    toDict(): {
        [key: string]: any;
    };
}

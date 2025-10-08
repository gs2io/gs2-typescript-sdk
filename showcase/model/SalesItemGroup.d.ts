import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
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
    getSalesItems(): Gs2Showcase.SalesItem[] | null;
    setSalesItems(salesItems: Gs2Showcase.SalesItem[] | null): this;
    withSalesItems(salesItems: Gs2Showcase.SalesItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SalesItemGroup | null;
    toDict(): {
        [key: string]: any;
    };
}

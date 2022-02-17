import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeInventoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.InventoryModelMaster[] | null;
    setItems(items: Gs2Inventory.InventoryModelMaster[] | null): this;
    withItems(items: Gs2Inventory.InventoryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

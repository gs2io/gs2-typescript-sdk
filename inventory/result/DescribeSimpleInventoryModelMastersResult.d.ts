import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeSimpleInventoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.SimpleInventoryModelMaster[] | null;
    setItems(items: Gs2Inventory.SimpleInventoryModelMaster[] | null): this;
    withItems(items: Gs2Inventory.SimpleInventoryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSimpleInventoryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeBigInventoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.BigInventoryModelMaster[] | null;
    setItems(items: Gs2Inventory.BigInventoryModelMaster[] | null): this;
    withItems(items: Gs2Inventory.BigInventoryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBigInventoryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

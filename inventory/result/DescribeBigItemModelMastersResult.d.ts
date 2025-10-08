import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeBigItemModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.BigItemModelMaster[] | null;
    setItems(items: Gs2Inventory.BigItemModelMaster[] | null): this;
    withItems(items: Gs2Inventory.BigItemModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBigItemModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

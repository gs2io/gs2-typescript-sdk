import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeBigItemsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.BigItem[] | null;
    setItems(items: Gs2Inventory.BigItem[] | null): this;
    withItems(items: Gs2Inventory.BigItem[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBigItemsResult;
    toDict(): {
        [key: string]: any;
    };
}

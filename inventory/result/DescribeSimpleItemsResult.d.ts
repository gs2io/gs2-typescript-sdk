import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeSimpleItemsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.SimpleItem[] | null;
    setItems(items: Gs2Inventory.SimpleItem[] | null): this;
    withItems(items: Gs2Inventory.SimpleItem[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSimpleItemsResult;
    toDict(): {
        [key: string]: any;
    };
}

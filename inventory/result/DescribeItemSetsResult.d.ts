import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeItemSetsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.ItemSet[] | null;
    setItems(items: Gs2Inventory.ItemSet[] | null): this;
    withItems(items: Gs2Inventory.ItemSet[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeItemSetsResult;
    toDict(): {
        [key: string]: any;
    };
}

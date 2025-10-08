import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeInventoriesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.Inventory[] | null;
    setItems(items: Gs2Inventory.Inventory[] | null): this;
    withItems(items: Gs2Inventory.Inventory[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoriesResult;
    toDict(): {
        [key: string]: any;
    };
}

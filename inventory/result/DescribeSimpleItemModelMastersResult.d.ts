import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeSimpleItemModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.SimpleItemModelMaster[] | null;
    setItems(items: Gs2Inventory.SimpleItemModelMaster[] | null): this;
    withItems(items: Gs2Inventory.SimpleItemModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSimpleItemModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

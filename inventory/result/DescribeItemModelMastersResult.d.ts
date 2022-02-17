import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeItemModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inventory.ItemModelMaster[] | null;
    setItems(items: Gs2Inventory.ItemModelMaster[] | null): this;
    withItems(items: Gs2Inventory.ItemModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeItemModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

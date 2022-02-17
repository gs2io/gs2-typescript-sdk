import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeSalesItemMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Showcase.SalesItemMaster[] | null;
    setItems(items: Gs2Showcase.SalesItemMaster[] | null): this;
    withItems(items: Gs2Showcase.SalesItemMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSalesItemMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

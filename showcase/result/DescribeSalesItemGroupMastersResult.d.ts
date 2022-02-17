import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeSalesItemGroupMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Showcase.SalesItemGroupMaster[] | null;
    setItems(items: Gs2Showcase.SalesItemGroupMaster[] | null): this;
    withItems(items: Gs2Showcase.SalesItemGroupMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSalesItemGroupMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

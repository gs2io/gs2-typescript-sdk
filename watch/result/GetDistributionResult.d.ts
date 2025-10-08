import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetDistributionResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Watch.Distribution[] | null;
    setItems(items: Gs2Watch.Distribution[] | null): this;
    withItems(items: Gs2Watch.Distribution[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDistributionResult;
    toDict(): {
        [key: string]: any;
    };
}

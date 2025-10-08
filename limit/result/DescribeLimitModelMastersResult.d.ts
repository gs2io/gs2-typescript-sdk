import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class DescribeLimitModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Limit.LimitModelMaster[] | null;
    setItems(items: Gs2Limit.LimitModelMaster[] | null): this;
    withItems(items: Gs2Limit.LimitModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLimitModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

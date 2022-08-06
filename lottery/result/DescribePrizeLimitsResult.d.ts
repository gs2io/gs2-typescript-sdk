import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribePrizeLimitsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Lottery.PrizeLimit[] | null;
    setItems(items: Gs2Lottery.PrizeLimit[] | null): this;
    withItems(items: Gs2Lottery.PrizeLimit[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePrizeLimitsResult;
    toDict(): {
        [key: string]: any;
    };
}

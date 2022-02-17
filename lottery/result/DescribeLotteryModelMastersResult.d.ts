import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribeLotteryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Lottery.LotteryModelMaster[] | null;
    setItems(items: Gs2Lottery.LotteryModelMaster[] | null): this;
    withItems(items: Gs2Lottery.LotteryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLotteryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

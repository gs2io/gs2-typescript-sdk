import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribePrizeTableMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Lottery.PrizeTableMaster[] | null;
    setItems(items: Gs2Lottery.PrizeTableMaster[] | null): this;
    withItems(items: Gs2Lottery.PrizeTableMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePrizeTableMastersResult;
    toDict(): {
        [key: string]: any;
    };
}

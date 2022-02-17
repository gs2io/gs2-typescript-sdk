import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribePrizeTablesResult implements IResult {
    private items;
    getItems(): Gs2Lottery.PrizeTable[] | null;
    setItems(items: Gs2Lottery.PrizeTable[] | null): this;
    withItems(items: Gs2Lottery.PrizeTable[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePrizeTablesResult;
    toDict(): {
        [key: string]: any;
    };
}

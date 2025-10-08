import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribeProbabilitiesResult implements IResult {
    private items;
    getItems(): Gs2Lottery.Probability[] | null;
    setItems(items: Gs2Lottery.Probability[] | null): this;
    withItems(items: Gs2Lottery.Probability[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProbabilitiesResult;
    toDict(): {
        [key: string]: any;
    };
}

import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class PredictionResult implements IResult {
    private items;
    getItems(): Gs2Lottery.DrawnPrize[] | null;
    setItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    withItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PredictionResult;
    toDict(): {
        [key: string]: any;
    };
}

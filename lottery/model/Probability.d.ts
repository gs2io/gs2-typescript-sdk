import IModel from '../../core/interface/IModel';
import * as Gs2Lottery from '../../lottery/model';
export default class Probability implements IModel {
    private prize;
    private rate;
    getPrize(): Gs2Lottery.DrawnPrize | null;
    setPrize(prize: Gs2Lottery.DrawnPrize | null): this;
    withPrize(prize: Gs2Lottery.DrawnPrize | null): this;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Probability | null;
    toDict(): {
        [key: string]: any;
    };
}

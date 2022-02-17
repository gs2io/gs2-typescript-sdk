import IModel from '../../core/interface/IModel';
import DrawnPrize from './DrawnPrize';
export default class Probability implements IModel {
    private prize;
    private rate;
    getPrize(): DrawnPrize | null;
    setPrize(prize: DrawnPrize | null): this;
    withPrize(prize: DrawnPrize | null): this;
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

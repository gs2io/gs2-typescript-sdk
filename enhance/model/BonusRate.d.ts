import IModel from '../../core/interface/IModel';
export default class BonusRate implements IModel {
    private rate;
    private weight;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BonusRate | null;
    toDict(): {
        [key: string]: any;
    };
}

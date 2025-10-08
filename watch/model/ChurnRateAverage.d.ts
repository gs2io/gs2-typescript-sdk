import IModel from '../../core/interface/IModel';
export default class ChurnRateAverage implements IModel {
    private churnRate;
    getChurnRate(): number | null;
    setChurnRate(churnRate: number | null): this;
    withChurnRate(churnRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChurnRateAverage | null;
    toDict(): {
        [key: string]: any;
    };
}

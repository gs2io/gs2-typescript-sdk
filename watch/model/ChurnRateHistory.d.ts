import IModel from '../../core/interface/IModel';
export default class ChurnRateHistory implements IModel {
    private date;
    private churnRate;
    getDate(): string | null;
    setDate(date: string | null): this;
    withDate(date: string | null): this;
    getChurnRate(): number | null;
    setChurnRate(churnRate: number | null): this;
    withChurnRate(churnRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChurnRateHistory | null;
    toDict(): {
        [key: string]: any;
    };
}

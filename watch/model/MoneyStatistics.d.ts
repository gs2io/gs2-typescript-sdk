import IModel from '../../core/interface/IModel';
export default class MoneyStatistics implements IModel {
    private arpu;
    private arppu;
    private payingRate;
    getArpu(): number | null;
    setArpu(arpu: number | null): this;
    withArpu(arpu: number | null): this;
    getArppu(): number | null;
    setArppu(arppu: number | null): this;
    withArppu(arppu: number | null): this;
    getPayingRate(): number | null;
    setPayingRate(payingRate: number | null): this;
    withPayingRate(payingRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
